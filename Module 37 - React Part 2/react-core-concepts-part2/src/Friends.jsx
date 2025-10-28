import {use} from "react"
import Friend from "./Friend";

export default function Friends({friendsPromise}){

    
    const Styles ={ 
        color: 'blue',
        border: '2px solid blue',
        padding: '10px',
        backgroundColor:'rgba(0, 255, 0, 0.9)',
        borderRadius:'20px'
    }
    
    const friends = use(friendsPromise);
    return(
        <div style={Styles}>
            <h3>Users:{friends.length}</h3>

            {
                friends.map(friend => <Friend key={friend.id} friend={friend}></Friend> )
            }
        </div>
    )
}