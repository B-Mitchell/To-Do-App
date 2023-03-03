import React, { useState } from "react";
import { Trash } from "phosphor-react"
import "./todo.css"

export default function Todo() {

    const [ todos , setTodos ] = useState([]);
    const [ content , setContent ] = useState("");

    const addToDo = (todo) => {
        const newTodo = {
            id: Math.random(),
            todo: todo
        }
        {
            content == "" ?
            alert("No todo inputed!") :
            setTodos([ ...todos , newTodo ])
    
            setContent("")
        }
    }
    const removeTodo = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id)
        setTodos(newTodos)
    }
    const clearAllTodos = () => {
        const emptyTodos = [];
        setTodos(emptyTodos)
    }

    
    const totalTodos = todos.length


    return (
        <>
        <form>
            <h2>To-Do App</h2>
            <p className="tasksCounter">tasks left: {totalTodos}</p>

            
            <input type="text" value={content} onChange={(e) => setContent(e.target.value)} placeholder="input your todo here..."/><br />
            <p>{() => check()}</p>
            <button type="submit" onClick={(e) => {e.preventDefault() , addToDo(content)}}>Add Todo</button>
        </form>
        <Trash size={60} onClick={() => clearAllTodos()} className="mainTrash"/>
        {
            totalTodos == 0 ?
            <p className="noTodosText">No todos yet</p> :
            <ul>
            {
                todos.map((todo) => {
                    return <li key={todo.id} >
                        {todo.todo}
                        <Trash className="littleTrash" size={20} onClick={() => {removeTodo(todo.id)}}/>
                    </li>
                })
            }
        </ul>
        }
        </>
    )
}
