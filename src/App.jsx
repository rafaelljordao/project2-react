import { Home } from './components/pages/Home'
import { SignUp } from './components/pages/SignUp'
import { Clients } from './components/pages/Clients'
import { Head } from './components/Header'
import { Navbar } from './components/Navbar'
import './app.css'

import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className='app'>
      <Head />
        <div className='appDivBody'>
          <Navbar />
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/SignUp" element={ <SignUp /> } />
            <Route path="/Clients" element={ <Clients /> } />
          </Routes>
        </div>
      {/* <Footer /> */}
    </div>
  )
  
}

export default App
