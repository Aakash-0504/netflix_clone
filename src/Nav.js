import React, { useEffect, useState } from 'react'
import './Nav.css';

function Nav() {
    const [show,handleShow]= useState(false);

    const transitionNavBar = () =>{
        if(window.scrollY > 100){
            handleShow(true);
        }else{
            handleShow(false);
        }

    };

    useEffect(()=>{
        window.addEventListener("scroll",transitionNavBar);
        return ()=> window.removeEventListener("scroll",transitionNavBar);

    },[])

  return (
    <div className={`nav ${show && "nav__black"}`}>
        <div className="nav__contents">
        <img 
        className='nav__logo' src="https://www.citypng.com/public/uploads/small/11594682142zfvmyyi7wtpxqdggweilgak0d0ys35ktrf9ssm6jyafxrmn3ipwkvghhm2ilbx4sckpnlditunervtidvw2xlww1hcpbrmi40hhs.png" alt="No file" />
        <img 
        className='nav__avatar'src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="No file" />

        </div>
        
       
    </div>
  )
}

export default Nav