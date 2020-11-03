module.exports = (DB) => {
	const express = require("express");
	const router = express.Router();

	/**** Routes ****/
	router.get('/questions', async (req, res) => {
		res.json(await DB.getQuestions());
	});

	router.get('/question/:id', async (req, res) => {
		res.json(await DB.getQuestion(req.params.id));
	});

	router.post('/questions', async (req, res) => {
		const name = req.body.name;
		const content = req.body.content
		await DB.createQuestion(name, content)
		res.json({msg: name + ' has been added!'});
	})

	router.post('/questions/answers', async (req, res) => {
		const questionID = req.body.questionID
		const content = req.body.content
		await DB.addAnswer(questionID, content)
		res.json({msg: 'answer has been added!'});
	})

	router.post('/questions/answers/incr', async (req, res) => {
		const questionID = req.body.questionID
		const answerID = req.body.answerID
		await DB.incrScore(questionID, answerID)
		res.json({msg: 'answer has been added!'});
	})

	return router;
}
