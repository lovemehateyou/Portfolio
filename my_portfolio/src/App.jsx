import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import Home from './pages/Home.jsx'

import Projects from './pages/Projects.jsx'

import About from './pages/About.jsx'

import Contact from './pages/ContactMe.jsx' 

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path ="/projects" element={<Projects/>}/>       
        <Route path ="/About" element={<About/>}/>
        <Route path ="/contact" element={<Contact/>}/> 
      </Routes>
       <Footer />
   </Router> 
      
    </>
  )
}

export default App
