import React, { useState } from 'react'
import './App.css';
import Navbar from './Component/Navbar';
import Store from './Component/Store';
import { Route, Routes } from 'react-router-dom';
import StoreApp from './Component/StoreApp';
import AppDetail from './Component/AppDetail';
function App() {
  const [theme,setTheme]=useState('bright');
  function handleChangeTheme(newTheme){
    setTheme(newTheme);
  }
  return (
    <div className={`App ${theme === 'black' ? 'dark-theme':'bright-theme' }`}>
      <Navbar onChangeTheme={handleChangeTheme}/>
      <Routes>
        <Route path='/' element={<Store/>}></Route>
        <Route path='/storeapp' element={<StoreApp/>}/>
        <Route path="/storeapp/:id" element={<AppDetail/>} />
        <Route path="/*" element={"Page Not Found"}></Route>
      </Routes>
    </div>
  )
}

export default App
