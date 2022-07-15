import React, {useState} from "react";

const Todo = () => {

    let [todo, settodo] = useState('')
    let [todoList, settodoList] = useState([])
    let[didTodo, setdidTodo] = useState(false)

    const addTodo = (e) => {
        e.preventDefault();

        let todoObj = {todo, didTodo};
        return settodoList([...todoList, todoObj])
    }

    const deleteTodo = (e, index) =>{
        let filteredCopy = todoList.filter((todo, i)=>{
            return i!= index
        })
        settodoList(filteredCopy);
    }

    const completedTodo = (e, index) =>{
        let copy = [...todoList]
        copy[index].didTodo = e.target.checked
        settodoList(copy);
    }



    return(
        <>
            <div>
                <h1>Its your Todo List!</h1>
                <form onSubmit={addTodo}>
                    <label htmlFor="addTodo">Add a Todo</label>
                    <input onChange={(e) => settodo(e.target.value)} type="text" />

                    <input type="submit" value="Add Todo" />
                </form>
            </div>
            {
                todoList.map((todo, index) =>{
                    return(
                        <div key={index}>
                            <p style={{textDecoration: todo.didTodo? 'line-through':null}}>{todo.todo}</p>
                            <label htmlFor="didTodo">Todo Completed!</label>
                            <input onClick={(e)=> completedTodo(e, index)} type="checkbox" checked={todo.didTodo} />
                            <button onClick={(e)=>deleteTodo(e,index)}>Delete</button>
                        </div>
                    )
                })
            }
        </>
        
    )
    }

export default Todo