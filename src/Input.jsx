import { useContext, useState } from "react"
import { ContextStroe } from "./TodoApp"

function handleAddclick(newMsg,dispatch,setMsg){

    const anEvent = {type : "ADD",newEvent : newMsg}
    return (e)=> {
        setMsg("")
        dispatch(anEvent)
    }
}


export default function Input(){

    const [msg,setMsg] = useState("")
    const {appReducer} = useContext(ContextStroe)
    const dispatch = appReducer[1]

    console.log("msg",msg)

    return(
        <div>
            <input 
                style={{width: "150px"}}
                onChange = {(e)=> setMsg(e.target.value)}
                value={msg}
                ></input>
            <button onClick={handleAddclick(msg,dispatch,setMsg)}>{"send"}</button>
        </div>
    )
}