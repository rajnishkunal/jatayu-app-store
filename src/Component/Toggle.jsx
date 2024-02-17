import React, { useState } from 'react'
import './Toggle.css'
function Toggle({onChangeTheme}) {
  const [toggle, setToggle]=useState(false);

  function toggleHandler(event){
    setToggle(prevMode=>!prevMode);
    onChangeTheme(toggle? 'white':'black')
  }
  return (
    <div>
      <input type='checkbox' id='toogle'checked={toggle} onChange={toggleHandler}></input>
      <label htmlFor='toogle' className='toogle-label'></label>
    </div>
  )
}

export default Toggle
