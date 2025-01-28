import React from 'react'
import profile from '../../images/my-img.png'
import '../Home/home.css'
import About from '../About/index.jsx'
import Services from '../Services/index.jsx'
import Project from '../Projects/index.jsx'
import Contact from '../Contact/index.jsx'
import Footer from '../../component/Footer/Footer.jsx'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
     <>
       <div className="container">
         <img src={profile} alt="" />
         <h1> <span>I'm Ayesha Siyal,</span> Front-end developer with react js</h1>
         <p>I am a front-end developer from hydrabad sindh, I have 2 years of experience in front-end with react js</p>
         <div className="action">
          <NavLink to='./Contact' className="home-connect">Connect With me</NavLink>
          <div className="home-resume">My resume</div>
         </div>
        </div> 
        <div>
        <About/>
        <Services/>
        <Project/>
        <Contact/>
        {/* <Footer/> */}
        </div>
     </>
  )
}

export default Home