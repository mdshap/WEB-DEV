import {use} from "react"

export default function Users({fetchUsers}){


    const Styles ={ 
        color: 'blue',
        border: '2px solid blue',
        padding: '10px',
        backgroundColor:'rgba(0, 255, 0, 0.9)',
        borderRadius:'20px',
        height:'200px'

    }

    const users= use(fetchUsers);
    return(
        <div>
            <h3 style={Styles}>Users:{users.length}</h3>
        </div>
    )
}