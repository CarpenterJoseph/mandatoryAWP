import React, {useState, useEffect} from "react";

function AddQuestion(props) {
	const [name, setName] = useState('')
	const [content, setContent] = useState('')



	return (
		<form>
			<label htmlFor="form_name">Name</label>
			<input onChange={event => setName(event.target.value)} type="text" id="form_name" name="form_name"/>
			<label htmlFor="form_content">Content</label>
			<input onChange={event => setContent(event.target.value)} type="text" id="form_content" name="form_content"/>
			<button type="button" onClick={(event) => props.addQuestion(name, content)}>
				Submit
			</button>
		</form>
	);
}

export default AddQuestion;