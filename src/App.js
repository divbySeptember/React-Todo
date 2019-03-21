import React from 'react';
import Todo from './components/TodoComponents/Todo'
import './App.css';

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  const App = ()=> {
    return (
      <div className="mainContainer">
        <h2 className="mainHeader">Todo List App</h2>
        <Todo />
      </div>
    );
  }


export default App;