import React from 'react'
import ReactDOM from 'react-dom/client'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Clients" element={<Clients />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
