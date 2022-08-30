import { Home } from './components/pages/Home/Home'
import { SignUp } from './components/pages/SignUp/SignUp'  
import { Clients } from './components/pages/Clients/Clients'
import { Head } from './components/Header/Header'
import { Navbar } from './components/Navbar/Navbar'
import { Foot } from './components/Footer/Footer'
import { Form2 } from './components/pages/form2/form2'
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
          <Route path='/Form2' element={ <Form2 />} />
        </Routes>
      </div>
      <Foot />
    </div>
  )
  
}

export default App
