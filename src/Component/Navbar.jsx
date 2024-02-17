import React from 'react';
import './Navbar.css';
import './Toggle';
import { useLocation } from 'react-router-dom';
import Toggle from './Toggle';
const Navbar = ({onChangeTheme}) => {
  const location = useLocation(); 
  let title = 'App Store';

  if (location.pathname.startsWith('/storeapp/')) {
    title = 'Installation page';
  }
  return (
    <div>
      <div className='Navbar'>
        <div></div>
        <h1>{title}</h1>
        <Toggle onChangeTheme={onChangeTheme}/>
      </div>
    </div>
  )
}

export default Navbar
