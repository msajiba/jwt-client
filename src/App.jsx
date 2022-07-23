import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './pages/Header'
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Order from './pages/Order';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  

  return (
    <>
      <Header />

      <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/order' element={<Order />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
      </Routes>
    
    </>
  )
}

export default App
