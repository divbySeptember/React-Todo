import React from 'react'
import './Todo.css'
import TodoList from './TodoList'
import TodoForm from './TodoForm'



const newTodo = [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
  ];

class Todo extends React.Component {
    constructor() {
        super();
        this.state = {

            moreTodo: newTodo,
            task: '',
            id: Date.now(),
            completed: ''
        };
    }


    handleChanges = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    updateTodo = event => {
        event.preventDefault();
        const myList = {
            task: this.state.task,
            id: this.state.id,
            completed: this.state.completed
        }
        this.setState({
            moreTodo: [...this.state.moreTodo, myList]
        });
    };


    render () {
        return (
            <div className="todoContainer">

                <div className="nameList">
                {this.state.moreTodo.map((myTodo, index) => (
                <TodoList key={index} newTodo={myTodo} />
                ))}
                </div>

            <TodoForm  
            handleChanges={this.handleChanges}
            task={this.state.task}
            id={this.state.id}
            completed={this.state.completed}
            updateTodo={this.updateTodo}
            />
            </div>
        );
    }

    
}



export default Todo