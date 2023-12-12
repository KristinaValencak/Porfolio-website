import React from 'react'
import Logo from '../assets/Logo.png';

import '../styles/Navbar.css';
function Navbar() {
    
  return (
    <header>
    <div className="container">
    <div className="navigation">
        <div className="items">
            <div className="logo">
                <img src={Logo} width={220} alt='logo'/>
            </div>
            <div className="nav-a">
                
            <a href="#Home">Home</a>
            <a href="#about">About me</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
                
                
                  
            </div>
        </div>
        
        <div className="button">
            <a class="btn" href='#contact'>Contact</a>
        </div>
    </div>
</div>
</header>
 
)

}

export default Navbar

