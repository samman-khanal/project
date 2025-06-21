import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import '@fontsource/poppins';


import Login from './components/auth/Login'
import Register from './components/auth/Register'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

import './App.css';

const App = () => {
  return (
    
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    <Footer />
    </Router>
  );
}

export default App
