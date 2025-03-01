

import './App.css'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SearchDetail from './components/SearchDetail'
import MovieDetail from './components/MovieDetail'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";


function App() {


  return (
    <BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000} />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/search' element={<SearchDetail/>} />
      <Route path='/movie_detail/:id' element={<MovieDetail/>} />

    </Routes>
    </BrowserRouter>
 )
}

export default App
