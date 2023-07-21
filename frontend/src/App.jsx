import React, { useState } from "react";
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Index'
import About from './pages/About'
import Contact from './pages/Contact'
import Sponsors from './pages/Sponsors'
import Training from './pages/Training'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from "./components/Footer/Footer";
import SuccessPage from "./pages/SuccessPage";



function App() {

  const [isOpen, setIsOpen] = useState(false)
  
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <BrowserRouter> 
     <Sidebar isOpen={isOpen} toggle={toggle} />
    <Navbar toggle={toggle} />


     
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/sponsors" element={<Sponsors />} />
      <Route path="/training" element={<Training />} />
      <Route path="/success" element={<SuccessPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App