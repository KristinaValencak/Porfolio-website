import React from 'react';
import profile from '../assets/profile.jpg';
import '../styles/Home.css';


function Home() {
  return (
    <section className='container1'>
    <div className="home" id='Home'>
        <div className="image">
            <img src= {profile} alt="Profile"/>
        </div>
        <div className="Me">
            <h6>Kristina Valenčak</h6>
            <h1>I`m a Frontend<br/><span>Developer</span></h1>
            <p>I am a junior frontend programmer, designer, and developer of websites, entirely self-taught in these domains.</p>
        </div>
    </div>
    </section>
  )
}

export default Home
