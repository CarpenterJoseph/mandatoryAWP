import React from "react";
import {Link} from "@reach/router";

import AddQuestion from "./AddQuestion";
import ListQuestion from "./ListQuestion";

function Questions(props){
    const questionData = props.questionData

    const questionList = questionData.map(e => { return (
        <Link to={`${e._id}`} key={e._id}>
            <li><ListQuestion name={e.name} content={e.content}/></li>
        </Link>
    )})

    return(
        <>
            <AddQuestion addQuestion={props.addQuestion}/>
            <ul>{questionList}</ul>
        </>
    )
}

export default Questions