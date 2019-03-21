import React from 'react';
import {TweenLite} from "gsap";
import './Todo.css'

class Todo extends React.Component {
    constructor(props){
        super()

        // reference to the DOM node
        this.myElement = null;
        // reference to the animation
        this.myTween = null;
        this.outTween = null;
    }

    componentDidMount(){
        // use the node ref to create the animation
        this.myTween = TweenLite.from(this.myElement, 0.25, {x: -300});
    }

    componentWillUnmount(){
        this.outTween = TweenLite.to(this.myElement, 0.25, {x: -300});   
    }

    render(){
        return (
        <div 
            className={this.props.completed ? 'complete singleTodo' : 'incomplete singleTodo'} 
            onClick={this.props.function}
            ref={div => this.myElement = div}>
            <h3>{this.props.task}</h3>
        </div>

    );
    }
}

export default Todo;