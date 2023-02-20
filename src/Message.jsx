import { useContext } from "react"
import { ContextStroe } from "./TodoApp"


function handleDelEvent(delMsg,dispatch,delKey){
    return (e)=> dispatch({type: "DEL", delMsg: delMsg, delKey:delKey})
}



export default function Message(props){

    const {appReducer} = useContext(ContextStroe)
    const dispatch = appReducer[1]
   
    return (
        <li>
            {props.msg} <button onClick={handleDelEvent(props.msg,dispatch,props.delKey)}>{"Delete"}</button>
        </li>
    )
}