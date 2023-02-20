import { useContext } from "react"
import { ContextStroe } from "./TodoApp"
import Message from "./Message"


export default function TodoList(){
    const {appReducer} = useContext(ContextStroe)

    const toDoList = appReducer[0]
    const result = toDoList.map((e,idx)=> (<Message key={`cmd-${idx}`} delKey={`cmd-${idx}`} msg={e} />))

    return(
        <ul>{result}</ul>
    )

}