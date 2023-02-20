import { createContext, useReducer } from "react"
import reducers from "./reducers"
import TodoList from "./TodoList"
import Input from "./Input"
export const ContextStroe = createContext()

export default function ToDoapp(){

    const appReducer = useReducer(reducers,localStorage.getItem("toDoList")?localStorage.getItem("toDoList").split(","):[])


    return(
        <ContextStroe.Provider value={{ appReducer : appReducer}}>
            <div>
                <h2 style={{borderBottom: "1.5px black solid"}}>To Do List</h2>
                <Input></Input> 
                <TodoList></TodoList>     
            </div>
        </ContextStroe.Provider>
        )
}