import React from 'react'
import '../About/About.css'
import  pic from '../../images/about-pic.png'
// import theme from '../../images/theme.svg'

function About() {
  return (
  <>
     <div className="about">
       <div className="about-title">
          <h1>About me</h1>
          {/* <img src={theme} alt="" /> */}
       </div>
          <div className="about-section">
            <div className="about-left">
              <img src={pic} alt="" />
            </div>
            <div className="about-right">
              <div className="about-para">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, inventore. Veniam vero atque odio consequuntur reprehenderit labore aut quas rerum quibusdam, quidem exercitationem fugit consequatur? Modi, debitis vitae. Pariatur, quia.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, consequatur in! Officia.</p>
              </div>
              <div className="about-skills">
               
              <div className="about-skill"><p>Html & css</p> <hr style={{width:"100%"}}/></div>
              <div className="about-skill"><p>React js</p> <hr style={{width:"60%"}}/></div>
              <div className="about-skill"><p>javascript</p> <hr style={{width:"70%"}}/></div>
              <div className="about-skill"><p>Mysql</p> <hr style={{width:"40%"}}/></div>
              </div>
            </div>
          </div>
     </div>
  </>
  )
}

export default About