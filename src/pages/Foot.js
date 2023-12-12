
import React from 'react'
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import '../styles/Foot.css';

function Foot() {
  return (
    <footer>
      
      <div className='Foot'>
        
        <div className='Pages'>

                
            <a href="#Home">Home</a>
            <a href="#about">About me</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
    
            </div>
    
    <div className="mediaFooter">
        <a href="https://www.facebook.com/profile.php?id=100012036914249"><img src={facebook} width="30px" alt='fb'/></a>
        <a href="https://instagram.com/kristina_valencak?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr"><img src={instagram} width="30px" alt='Ig'/></a>
        </div>
    </div>

</footer>

  




  )
}

export default Foot
