export default function ToDo({task, isDone}){
    if(isDone===true){
        return(
        <li>Task: {task} is Done</li>
    )}
    else{
        return(
            <li>Task: {task} is Pending</li>
        )
    }
    
} 