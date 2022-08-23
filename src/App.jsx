import { Home } from './components/pages/Home'
import { SignUp } from './components/pages/SignUp'
import { Clients } from './components/pages/Clients'
import { Head } from './components/Header'
import { Navbar } from './components/Navbar'

import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className='app'>
      <Head />
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/SignUp" element={ <SignUp /> } />
        <Route path="/Clients" element={ <Clients /> } />
      </Routes>
      {/* <Footer /> */}
    </div>
  )
  
}

export default App
