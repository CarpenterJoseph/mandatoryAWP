import React from "react";

function ListQuestion(props){
	const name = props.name
	const content = props.content
	return(
		<>
			<h3>{name}</h3>
		</>
	)
}

export default ListQuestion