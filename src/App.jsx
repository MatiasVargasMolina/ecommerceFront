
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
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
