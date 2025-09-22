
import './App.css'
import Counter from './Counter'

function App() {

  function handleClick(){
    alert('I am Clicked')
  }

  const handleClick3 = (num) =>{
   alert('I am clicked 3')
  } 


  return (
    <>
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
