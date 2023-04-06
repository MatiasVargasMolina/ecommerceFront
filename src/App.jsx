
import './App.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Login"
import Home from "./components/Home"
import Register from "./components/Register"
import Navbar from "./components/Navbar"
import Dashboard from './components/Dashboard/Dashboard';
import Pricing from './components/Pricing';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Navbar /><Home /></>}/>
        <Route path="/login" element={<><Navbar /><Login /></>} />
        <Route path="/register" element={<><Navbar /><Register /></>} />
        <Route path="/dashboard" element={<><Navbar /><Dashboard /></>} />
        <Route path="/precios" element={<><Pricing /><Pricing /></>} />
      </Routes>
    </Router>
  )
}

export default App
