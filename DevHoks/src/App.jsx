/* eslint-disable no-unused-vars */
import './App.css'
import HomePage from './Pages/Home/home'
import AboutUs from './Pages/About/about'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div>
     <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
