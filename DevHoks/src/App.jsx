/* eslint-disable no-unused-vars */
import './App.css'
import React from 'react'
import HomePage from './Pages/Home/home'
import AboutUs from './Pages/About/about'
import Career from './Pages/Careers/careers'
import Contact from './Pages/Contact/contact'
import Events from './Pages/Events/events'
import Projects from './Pages/Projects/projects'
import Services from './Pages/Services/services'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div>
     <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
