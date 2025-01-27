import React from 'react'
import '../Contact/Contact.css'
// import theme from '../../images/theme.svg'
import email from '../../images/email.svg'
import number from '../../images/number.svg'
import location from '../../images/location.svg'


function Contact() {
  return (
   <>
     <div className="contact">
        <div className="contact-title">
            <h1>Get in touch</h1>
            {/* <img src={theme} alt="" /> */}
        </div>
        <div className="contact-section">
           <div className="contact-left">
               <h1>Let's talk</h1>
               <p>I'am currently Available to take on new projects, So feel free to send a message about anything that you want  me to work on. you can contact anytime.</p>
               <div className="contact-details">
                 <div className="contact-detail">
                    <img src={email} alt="" />
                    <p>aayeshaali937@gmail.com</p>
                 </div>
                 <div className="contact-detail">
                  <img src={number} alt="" />
                    <p>+92 3243501697</p>
                  </div>
                  <div className="contact-detail">
                    <img src={location} alt="" />
                     <p>Qasimabad Hydrabad Sindh</p>
                  </div>
               </div>
           </div>
           <form className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name="email" id="" />
            <label htmlFor="">Write Your Message here</label>
            <textarea name="message" rows='8' placeholder='Enter your message'></textarea>
            <button type='submit' className="contact-submit">
              Submit now
            </button>
           </form>
        </div>
      </div> 
   </>
  )
}

export default Contact