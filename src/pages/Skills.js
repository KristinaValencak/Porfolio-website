import React from 'react'
import '../styles/Skills.css';
import icona1 from '../assets/icona1.png';
import icona2 from '../assets/icona2.png';
import icona3 from '../assets/icona3.png';

function Skills() {
  return (
    <section className="skills" id='skills'>
        <div className="container4">
            <h1 className="skills-head">Skills</h1>
        <div className="card-grid">
            <div class="card">
                <img src= {icona1} alt='Graphic design'/>
                <h2>Graphic design</h2>
                    <p>I have experience in creating logos, promotional advertisements, 
                        and the visual aspects of websites. Additionally, I am skilled 
                        in designing thumbnails that stand out and capture viewers' attention.</p>
            </div>
            <div class="card">
                <img src={icona2} alt='Frontend'/>
                <h2>Frontend development</h2>
                <p>Html, Css, JavaScript, React</p>
            </div>
            <div class="card">
                <img src={icona3} alt='Content creator'/>
                <h2>Content creator</h2>
                <p>I create video content for various platforms such as YouTube, Instagram, and TikTok. 
                 I use applications like PowerDirector and VideoScribe to craft my videos.</p>
            </div>
        </div>
    </div>
</section>
  )
}

export default Skills
