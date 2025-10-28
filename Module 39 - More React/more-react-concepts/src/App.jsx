
import { Suspense } from 'react'
import './App.css'
import Bottles from './components/Bottles'

function App() {
const bottlePromise = fetch('../public/bottles.json')
.then(res => res.json())

  return (
    <>
    <Suspense fallback={<p>Loading...</p>}>
      <Bottles bottlePromise={bottlePromise}></Bottles>
    </Suspense>

      <h1>Vite + React</h1>
    </>
  )
}

export default App
