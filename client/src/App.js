import React, {useEffect, useState} from 'react';
import Questions from "./Questions";
const API_URL = process.env.REACT_APP_API;

function App() {
	const [data, setData] = useState("No data :(");

	useEffect(() => {
		async function getData() {
			const url = `${API_URL}/hello`;
			const response = await fetch(url);
			const data = await response.json();
			setData(data.msg);
		}
		getData();
	}, []);

	async function addQuestion(name, content) {
		const questionsURL = `${API_URL}/questions`
		const question = {
			name: name,
			content: content
		}
		const response = await fetch(questionsURL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(question)
		})
		const data = await response.json()

		console.log(data)
	}

	return (
		<>
			<h1>MERN App!</h1>
			<p>Data from server: {data}</p>
			<Questions addQuestion={addQuestion}></Questions>
		</>
	);
}

export default App;
