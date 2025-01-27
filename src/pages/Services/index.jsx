import React from 'react'
import '../Services/Services.css'
// import theme from '../../images/theme.svg'
import services  from '../../assets/services_data'
import arrow from '../../images/arrow.svg'
const Services = () => {
  return (
    <>
      <div className="services">
      <div className="services-title">
        <h1>My Services</h1>
        {/* <img src={theme} alt="" /> */}
      </div>
      <div className="services-container">
           {services.map((elem,key)=>{
               return <div key={key} className="services-formate">
                      <h1>{elem.id}</h1>
                      <h2>{elem.name}</h2>
                      <p>{elem.description}</p>
                      <div className="services-readmore">
                        <p>Read More</p>
                        <img src={arrow} alt="" />
                      </div>
               </div>
           })}
      </div>
    </div>
    
    </>
  )
}

export default Services