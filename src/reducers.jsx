export default function reducers(toDoList,action){

    let newDoList = [...toDoList]

    switch(action.type){
        case "ADD":
            newDoList.push(action.newEvent)
            break

        case "DEL":
            newDoList = newDoList.filter((msg,idx)=>action.delKey!==`cmd-${idx}`)
            console.log("remove",action.delKey)
            break
            
        default:
            console.log("toDoList",toDoList)
            break
    }  
    localStorage.setItem("toDoList",newDoList)

    return newDoList
            

}