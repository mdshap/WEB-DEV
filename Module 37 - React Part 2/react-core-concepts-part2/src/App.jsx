
import './App.css'
import Counter from './Counter'
import Users from './Users'
import Friends from './Friends'
import { Suspense } from 'react'

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())

const fetchFriends = async() =>{
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  return response.json()
}

function App() {

  function handleClick(){
    alert('I am Clicked')
  }

  const handleClick3 = () =>{
   alert('I am clicked 3')
  } 


  const friendsPromise= fetchFriends()


  return (
    <>
      <Suspense fallback={<h3>Loading...</h3>}>
      <Users fetchUsers={fetchUsers}></Users>
    </Suspense>

    <Suspense fallback={<h3>Loading...</h3>}>
      <Friends friendsPromise={friendsPromise}></Friends>
    </Suspense>

    <Counter></Counter>
   
      <h1>Vite + React</h1>
      <button onClick={handleClick} >Click Here</button>

      <button onClick={function handleClick2(){
        alert('I am Clicked 2.0')
      }}>Click Here 2</button>

      <button onClick={() => handleClick3(100)}>Click Here 3</button>
    </>
  )
}

export default App
