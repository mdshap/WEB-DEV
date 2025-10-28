import { Suspense } from 'react'
import './App.css'
import Countries from './Components/Countries'

const url='https://openapi.programming-hero.com/api/all#'
const countriesPromise=fetch(url)
.then(response=>response.json())
function App() {

  
  return (
    <div className='countries-container'>

    <Suspense fallback={<p>Loading...</p>}>
      <Countries countriesPromise={countriesPromise}></Countries>
    </Suspense>
    
      <h1>React World on the go...</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
} 

export default App
