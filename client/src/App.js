import React, {useEffect, useState} from 'react';
import Questions from "./Questions";
import {Router} from "@reach/router";
import Question from "./Question";
const API_URL = process.env.REACT_APP_API;

function App() {
	const [questionData, setQuestionData] = useState([]);

	useEffect(() => {
		async function getData() {
			const url = `${API_URL}/questions`;
			const response = await fetch(url);
			const data = await response.json();
			setQuestionData(data);
		}
		getData();
	}, []);

	async function addQuestion(name, content) {
		const url = `${API_URL}/questions`
		const question = {
			name: name,
			content: content
		}
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(question)
		})
		const data = await response.json()
	}

	async function addAnswer(questionID, content){
		const url = `${API_URL}/questions/answers`
		const answer = {
			questionID: questionID,
			content: content
		}
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(answer)
		})
		const data = await response.json()
	}

	async function incrScore(questionID, answerID){
		const url = `${API_URL}/questions/answers/incr`
		const info = {
			questionID: questionID,
			answerID: answerID
		}
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(info)
		})
		const data = await response.json()
	}

	return (
		<>
			<h1>MERN App!</h1>
			<Router>
				<Questions path='/' questionData={questionData} addQuestion={addQuestion}/>
				<Question path='/:id' questionData={questionData} addAnswer={addAnswer} incrScore={incrScore}/>
			</Router>
		</>
	);
}

export default App;
