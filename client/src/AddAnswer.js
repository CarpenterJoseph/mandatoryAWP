import React, {useState, useEffect} from "react";

function AddAnswer(props) {
	const [content, setContent] = useState('')

	return (
		<form>
			<label htmlFor="form_content">Content</label>
			<input onChange={event => setContent(event.target.value)} type="text" id="form_content" name="form_content"/>
			<button type="button" onClick={(event) => props.addAnswer(props.questionID, content)}>
				Submit
			</button>
		</form>
	);
}

export default AddAnswer;