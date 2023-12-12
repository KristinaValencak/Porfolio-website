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
                
                <p>Hey there! 👋 I'm Kristina, a self-taught frontend programmer with a boundless passion for crafting digital experiences. 
                  My journey into the world of coding began as a personal quest, driven by an insatiable curiosity and a determination to turn ideas into captivating web interfaces.
                  🚀 As a proactive individual, I thrive on the dynamic nature of frontend development, where each line of code brings creativity to life.
                  I specialize in translating design concepts into interactive, user-friendly websites that leave a lasting impression.💡 What fuels my enthusiasm? The endless possibilities within
                   the ever-evolving tech landscape! I find joy in staying ahead of the curve, learning new technologies, and embracing challenges head-on. 
                   With a commitment to continuous growth, I strive to elevate user experiences through elegant and efficient code. Let's embark on this coding journey together, where innovation meets passion!💻✨
            </p>
                
            </div>
        </div>
    </section>
  )
}

export default About
