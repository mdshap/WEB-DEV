
import './App.css';
import Todo from './ToDo';
import Actor from './Actor';

function App() {
  const actors=['Bappa Raj', 'Salman Shah', 'Omar Sunny']
  return (
    <>
    {
      actors.map(actor => <Actor actor={actor}></Actor>)
    }

    <Todo task="Learn React" isDone={true}></Todo>
    <Todo task="Revise React" isDone={false}></Todo>
    <Person></Person>
      <h1>Vite + React</h1>
      <Developer name="Rajon" tech="Python"></Developer>
      <Developer name="Bakul" tech="JavaScript"></Developer>
      <Player name="Tamim" runs="5000"></Player>
      <Player name="Mushfiqur" runs="3500"></Player>   
    </>
  )
}

function Person (){
  const age=17;

  const personStyle={
    color: 'red'
  }
  return(
      <div className='Student'>
          <p style={personStyle}>Name: </p>
          <p>Dept: </p>
      </div>
  )
}

function Developer(pros){
  console.log(pros);
  return(
    <div style={
      {
        color: 'green',
        border: '1px solid skyblue',
        background: 'skyblue',
        padding: '10px',
        borderRadius: '20px',
        marginBottom: '10px'

      }
    }>
      <h3>Hello, mine is {pros.name}</h3>
      <p>I am a {pros.tech} developer</p>
    </div>
  )
}

function Player({name, runs}){
  return(
    <div className='Student'>
      <p>The Player is: {name}</p>
      <p>His Run is: {runs}</p>
    </div>
  )
}
 
export default App
