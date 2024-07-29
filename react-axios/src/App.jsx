import './App.css'

import { Outlet } from 'react-router-dom'
import Navbar from './componentes/Navbar'

function App() {

  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <Outlet /> 
        
      </div>
    </div>
  )
}

export default App
