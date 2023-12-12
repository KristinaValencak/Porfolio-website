import React from 'react'
import '../styles/About.css';
import avatar from '../assets/avatar.png';


function About() {
  return (
    <section className="About" id='about'>
        <div className="container3">
            <div className="image2">
                <img src= {avatar} height="400px" alt='Avatar' />
            </div>
            <div className="description">
                <h1>About <span>Me</span></h1>
                
                <p>I am an independent researcher, curious about various fields and always open to new learning opportunities. 
                With my dedication to creative thinking and hard work, I look forward to collaborating with others to co-create innovative solutions. 
                My passion lies in exploring new pathways and contributing to sustainable progress in the technological realm.
            </p>
                
            </div>
        </div>
    </section>
  )
}

export default About
