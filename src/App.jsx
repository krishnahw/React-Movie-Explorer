import { useState } from 'react'

import './App.css'
import Home from './components/Home'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Header from './utility/Header'


function App() {


  return (
    <BrowserRouter>

    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
    </BrowserRouter>
 )
}

export default App
