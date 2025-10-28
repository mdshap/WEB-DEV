import Navbar from './assets/Components/Navbar'
import Footer from './assets/Components/Footer'
import './App.css'
import Container from './assets/Components/Container'

import { Suspense } from 'react'
import IssuesManagement from './assets/Components/IssuesManagement'
import Loading from './assets/Components/Loading'

const fetchIssues = async () => {
    const result = await fetch('/data.json')
    return result.json();
  }

function App() {

  const fetchPromise= fetchIssues();
  

  return (
    <>
      <div className=''>
        <Navbar/>

        <Suspense fallback=
        {<Loading></Loading>}>
          <IssuesManagement fetchPromise={fetchPromise}></IssuesManagement>
        </Suspense>
        
        
        <Footer/>


      </div>
    </>
  )
}

export default App
