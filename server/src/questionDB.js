module.exports = (mongoose) => {

    const questionSchema = new mongoose.Schema({
        name: String,
        content: String,
        answers: [{
            content: String,
            score: Number
        }]
    });

    const questionModel = mongoose.model('question', questionSchema);
    mongoose.set('useFindAndModify', false);

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

    async function createQuestion(name, content) {
        let question = new questionModel({
            name: name,
            content: content
        });
        return question.save();
    }

    async function addAnswer(id, content){
        const answer = {
            content: content,
            score: 0
        }
        return questionModel.findOneAndUpdate(
            {_id: id},
            {$push: {answers: answer}});
    }

    async function incrScore(questionID, answerID) {
        return await questionModel.update(
            { _id: questionID, 'answers._id': answerID },
            { $inc: { 'answers.$.score': 1 } },
            { new: true }
        );
    }

    return {
        getQuestions,
        getQuestion,
        createQuestion,
        addAnswer,
        incrScore
    }
}