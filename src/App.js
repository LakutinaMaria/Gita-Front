import {Navigate, Routes, Route} from 'react-router-dom';
import React, {Fragment} from 'react';
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Public from './pages/public/Public'

function App() {
  return (  
    <>
    <Routes>
      <Route exact path='/' element={<Home/>}/>          
          <Route exact path='/register' element={<Public/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='*' element={<Home/>}/>
    </Routes>
    </>
  );
}

export default App;
