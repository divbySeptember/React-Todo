// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'


const TodoList = (props) => {
    return(
        <div className="listItem">
            <input className="check" type="checkbox" onChange={props.completed} />
            <h2  className="listHeader" > {props.newTodo.task}</h2>
        </div>
    )
}



export default TodoList