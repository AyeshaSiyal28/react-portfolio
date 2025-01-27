import React from 'react'
import profile from '../../images/my-img.png'
import '../Home/home.css'
function Home() {
  return (
     <>
       <div className="container">
         <img src={profile} alt="" />
         <h1> <span>I'm Ayesha Siyal,</span> Front-end developer with react js</h1>
         <p>I am a front-end developer from hydrabad sindh, I have 2 years of experience in front-end with react js</p>
         <div className="action">
          <div className="home-connect">Connect With me</div>
          <div className="home-resume">My resume</div>
         </div>
        </div> 
     </>
  )
}

export default Home