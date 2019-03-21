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
            completed: '',
            
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
            completed: this.state.completed,
            delTodo: this.state.func,
            
        }
        this.setState({
            moreTodo: [...this.state.moreTodo, myList]
        });
    };

    getStyle = () => {
        return{
          padding: '10px',
          textDecoration: this.state.completed ?
          'line-through' : 'none',
            cursor: 'pointer'
          
        }
    };


   

    render () {
        return (
            <div className="todoContainer">

                <div className="nameList" >
                {this.state.moreTodo.map((myTodo, index) => (
                    
                <TodoList key={index} newTodo={myTodo} 
                delTodo={this.props.delTodo}   
                style={this.getStyle()} 
                onClick={this.state.completed}
                />

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