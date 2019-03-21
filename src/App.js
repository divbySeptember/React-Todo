import React from 'react';


import "./App.css";

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

//todo  list App. 
class App extends React.Component {
  constructor(){
    super();

    console.log(localStorage.getItem('list'))

    //set initial state and input menu
    this.state = {
      list: this.localStorageList(),
      task: ''
    }
  }

  localStorageList = () => {
    const localList = localStorage.getItem('list')
    if (localList) {
      return JSON.parse(localList);
    }
    return [];
  }
  
    //handles input changes on input form. sets the state.task to whatever input form value is.
  inputChangeHandler = event => {
    this.setState({ task: event.target.value });
  };

    //handles form submissions on submit. creates a newTask object with current input field value. pushes the task to the state.list and resets the task to empty.
  formSubmitHandler = event => {
    event.preventDefault();
    if(this.state.task !== ''){
    let newTask = {
      task: this.state.task,
      completed: false,
      id: Date.now()
    }
    this.setState(prevState => {
      localStorage.setItem('list', JSON.stringify([...prevState.list, newTask]));
      return {
        list: [...prevState.list, newTask],
        task: ''
      };
    });
    }
  };

  //this is an onclick function for each individual todo task. 
  completeTask = i => {
    this.setState(prevState => {
      //maps through the current list of todos using the item and index.
      const list = prevState.list.map((item, j) => {
        //checks if the todo task clickd on matches the current index in the array. if so, creates a new Task object, and flips the "completed" boolean value and returns it to map function. else, it just returns the existing item. 
        if(j === i) {
          let newTask = {
            task: item.task,
            completed: !item.completed,
            id: item.id
          }
          return newTask
        } else {
          return item
        }
      });
      //after mapping, returns the complete list (we are in setState)
      return {
        list
      };
    })

  };

  clearComplete = event => {
    event.preventDefault();
    this.setState(prevState => {
      const list = prevState.list.filter(item => {
        return !item.completed
      })
      localStorage.setItem('list', JSON.stringify(list));
      return {
        list,
      };
    })
    
  };

//ref={div => this.myElement = div}

  render() {
    return (
      <div className={"appContainer"}>
        <TodoForm 
          submitFunction={this}
        />
        <TodoList
          list={this.state.list} 
          function={this.completeTask}
        />
      </div>

    );
  }
}

export default App;