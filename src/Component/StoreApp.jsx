import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './StoreApp.css';

const StoreApp = ({ data }) => {

  const [readMore, setReadMore] = useState(false);
  const discription = readMore ? data.dis : `${(data.dis).substring(0, 100)}`;
  function readmoreHandler() {
    setReadMore(!readMore)
  }
  function clickHandler() {

  }
  return (
    <div className="StoreApp">
      <div className='nav-link'>
        <img src={data.img} alt='logo' className='img'></img>
        <h2 className='app-heading'>{data.name}</h2>
        <p className='app-detail'>{data.detail}</p>
        <p className='dis'>
          {discription}
          <span onClick={readmoreHandler} className='read-more' >
            {readMore ? ' show less' : ' read more ...'}
          </span>
        </p>
        <NavLink to={`/storeapp/${data.id}`} >
          <button className='demo-button' onClick={clickHandler}>Demo</button>
        </NavLink>
      </div>
    </div>
  )
}

export default StoreApp
