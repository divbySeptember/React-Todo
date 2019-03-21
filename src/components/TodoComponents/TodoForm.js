import React from 'react'

const TodoForm = props => {
        return(
            <form >
                
                <input className="form1"
                value={props.task}
                placeholder="New Todo Item"
                name="task"
                onChange={props.handleChanges}
                />
                <button className="btn1" onClick={props.updateTodo}>Add Too</button> 
                <button className="btn2" onClick={props.delTodo} >X</button> 
            </form>
        );

    
}


export default TodoForm






