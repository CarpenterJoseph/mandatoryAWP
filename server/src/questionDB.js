module.exports = (mongoose) => {
    const answerSchema = new mongoose.Schema({
        name: String,
        content: String,
        score: Number
    })

    const questionSchema = new mongoose.Schema({
        name: String,
        content: String,
        answers: [answerSchema]
    });

    const questionModel = mongoose.model('question', questionSchema);

    async function getQuestions() {
        try {
            return await questionModel.find();
        } catch (error) {
            console.error("getQuestion:", error.message);
            return {};
        }
    }

    async function getQuestion(id) {
        try {
            return await questionModel.findById(id);
        } catch (error) {
            console.error("getKitten:", error.message);
            return {};
        }
    }

    async function createQuestion(text) {
        let question = new questionModel({name: text});
        return question.save();
    }

    async function bootstrap(count = 10) {
        let l = (await getQuestions()).length;
        console.log("question collection size:", l);

        if (l === 0) {
            let promises = [];
            for (let i = 0; i < count; i++) {
                let newQuestion = new questionModel({name: `question number ${i}`});
                promises.push(newQuestion.save());
            }
            return Promise.all(promises);
        }
    }

    return {
        getQuestions,
        getQuestion,
        createQuestion,
        bootstrap
    }
}