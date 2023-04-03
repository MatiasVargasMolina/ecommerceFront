
import './App.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Login"
import Home from "./components/Home"
import Register from "./components/Register"
import Navbar from "./components/Navbar"
import Dashboard from './components/Dashboard/Dashboard';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Navbar /><Home /></>}/>
        <Route path="/login" element={<><Navbar /><Login /></>} />
        <Route path="/register" element={<><Navbar /><Register /></>} />
        <Route path="/dashboard" element={<><Navbar /><Dashboard /></>} />
      </Routes>
    </Router>
  )
}

export default App
