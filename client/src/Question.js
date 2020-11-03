import React from "react";
import {Link, useParams} from "@reach/router";
import AddAnswer from "./AddAnswer";
import ListQuestion from "./ListQuestion";

function Question(props){
	const params = useParams() // necessary for line below
	const questionID = params.id
	const question = props.questionData.find(e => e._id === questionID)
	if(question === undefined) return null

	const answerList = question.answers.map(e => { return (
		<>
			<li key={e._id}>{e.content}</li>
			<button onClick={() => props.incrScore(questionID, e._id)}>{e.score}</button>
		</>
	)})




	return(
		<>
			<h3>{question.name}</h3>
			<p>{question.content}</p>
			<AddAnswer questionID={questionID} addAnswer={props.addAnswer}/>
			<ul>{answerList}</ul>
		</>
	)
}

export default Question