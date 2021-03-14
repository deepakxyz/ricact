import React, {useState, useEffect} from 'react';
import './Todo.css';


function Todo(){
    return (
        <div className="todo">
            <TodoList/>
        </div>
    )

}

const TodoInput = (props)=>{
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSumbit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })

        // clear the text input after the sumbit
        setInput('');
    }
    return (
        <>
        <form onSubmit={handleSumbit}>
            <input type="text" onChange={handleChange} placeholder = "Add a todo" value={input} className="todo-input"></input>
            <button type="submit" className="btn" >Add</button>
        </form>
        </>
    )
}

const TodoList = ()=>{
    const[todos, setTodos] = useState([]);

    const  addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }

        const newTodos = [todo,...todos]
        setTodos(newTodos)
        console.log(...todos);
    }
    return(
        <div>
            <h1>What the plan for todoy?</h1>
            <TodoInput onSubmit={addTodo}/>
        </div>
    )
}

const TodoItem = () => {
    return (
        <div className="todo-list">
            <div className="todo-item">
                Visit the last website.
            </div>
            <button className="btn">Completed</button>
            <button className="btn">Delete</button>
        </div>
    )
}

export default Todo;