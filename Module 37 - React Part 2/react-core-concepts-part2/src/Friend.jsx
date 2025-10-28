export default function Friend({friend}){


    const {name, username, email, phone} = friend
    const Styles ={ 
        color: 'blue',
        border: '2px solid blue',
        padding: '10px',
        backgroundColor:'rgba(0, 255, 0, 0.9)',
        borderRadius:'20px'
    }

    return(
    <div style= {Styles}>
        <h4>Name: {name} </h4>
        <p>Username: {username} </p>
        <p>E-mail: {email} </p>
        <p>{phone}</p>
    </div>
    )
}