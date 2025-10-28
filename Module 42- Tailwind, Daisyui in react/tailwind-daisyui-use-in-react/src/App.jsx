import { Suspense } from 'react';
import './App.css'
import NavBar from './Components/Navbar/NavBar'
import Pricing from './Components/Navbar/PricingDats'

function App() {

  const pricingPromise = fetch('pricing.json').then(res => res.json());

  return (
    <>

    <header>
      <NavBar/>
    </header>

    <main>

      <Suspense>
        <Pricing pricingPromise = {pricingPromise}></Pricing>
      </Suspense>
    </main>
    </>
  )
}

export default App
