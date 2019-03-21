import React from 'react';

function TodoForm(props) {
    return(
        <div className={"todoFormContainer"}>
            <form onSubmit={props.submitFunction.formSubmitHandler}>
                <input 
                    name="task" 
                    value={props.submitFunction.state.task} 
                    onChange={props.submitFunction.inputChangeHandler} 
                    placeholder="... add new task" 
                /><br></br>
                <button type="submit">Add To List</button>
                <button type="submit" onClick={props.submitFunction.clearComplete}>Clear Completed</button>
            </form>

        </div>
    )
}

export default TodoForm;








