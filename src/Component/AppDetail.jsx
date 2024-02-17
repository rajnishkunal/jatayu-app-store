import React from 'react';
// import Navbar from './Navbar';
import toast, { Toaster } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { AppData } from '../data';
import './AppDetail.css';

function AppDetail() {
  const { id } = useParams();
  console.log(id);
  const app = AppData.find(app => app.id === parseInt(id));

  if (!app) {
    return <div>App not found</div>;
  }
function clickHandler(){
  toast.success('Download Started');
}
  return (
    <div>
      <div className='main-container'>
     <div className='AppDetail'>
       <div className='first-container'>
         <div>
           <img src={app.img} alt='img' className='AppDetail-img'></img>
         </div>
         <div>
           <div className="sub-container-1">
             <div>
             <h1>{app.name}</h1>
             </div>
             <div>
               <button className='AppDetail-button'>Website</button>
               <button className='AppDetail-button'>Source</button>
               <button className='AppDetail-button' onClick={clickHandler}>Download Apk</button>
               <button className='AppDetail-button'>Report Issue</button>
               <Toaster/>
             </div>
           </div>
           <div className='line'></div>
           <div className='sub-container-2'>
             <div>
               <p>Last update: {app.date}</p>
               <p>Office, Productivity</p>
             </div>
             <div>
               <p>License: Apache License v2</p>
               <p>Version: 1.8.18.1</p>
               <p>Upstream author: {app.name}</p>
             </div>
            
           </div>
           <div className='line'></div> 
           <div className='sub-container-3'>
           <button className='AppDetail-btn-demo'>Demo</button>
           <p>Package by: Jacob Weisz </p>
           </div>
         </div>
       </div>
       <div className='second-container'>
         <img src='https://global.discourse-cdn.com/business6/uploads/codeorgforum/original/2X/a/a46e23130af216baf51fe45bd03f7f8ccf8c7661.png' className='second-container-img' alt='img'></img>
         <img src='https://global.discourse-cdn.com/business6/uploads/codeorgforum/original/2X/1/1f9ebadaad761a10684c592ad23255c6ea24c8f9.png' className='second-container-img' alt='img'></img>
       </div>
       <div className='third-container'>
         <h3>Discription</h3>
         <div className='line'></div> 
         <p>
         No more sending your stuff back and forth via email; just create a pad, share it, and start collaborating!
         </p>
         <p>
         Etherpad allows you to edit documents collaboratively in real-time, much like a live multi-player editor that runs in your browser. Write articles, press releases, to-do lists, etc. together with your friends, fellow students or colleagues, all working on the same document at the same time.
         </p>
         <p>
         This is a Sandstorm port of Etherpad based on the Etherpad foundation's "Etherpad Lite".
         </p>
       </div>
     </div>
   </div>
    </div>
   

  );
}

export default AppDetail;
