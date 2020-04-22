import React, {Component} from 'react';
import TodoDetails from "./TodoDetails";

/*state ={
    lists:[],
    items:{}
}*/


class Todos extends Component {

    render() {
        let todos = this.props.todos;
        console.log("Todos2   ",todos)  /*(,  se all value console me print hoti hai )*/
        return (
            <div>
                This is my Todo App
                {todos.map((todo,index)=>(
                    <TodoDetails key ={todo.name} detail = {todo}/> /*single item pass kiya hai detail*/
                ))
                }

            </div>
        );
    }
}

export default Todos;