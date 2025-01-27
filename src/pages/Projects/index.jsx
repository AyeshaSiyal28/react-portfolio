import React from 'react'
import '../Projects/Project.css'
// import theme from '../../images/theme.svg'
import project_data from '../../assets/project_data'
function Projcets () {
  return (
    <>
    <div className="mywork">
      <div className="mywork-title">
           <h1>My Projects</h1>
           {/* <img src={theme} alt="" /> */}
      </div>
      <div className="mywork-container">
          {project_data.map((elem,id)=>{
            return  <div key={id} className="mywork-img">
              <img  src={elem.p_img} alt="" srcset="" />
            </div>
            
          })}
      </div>
    </div>
    
    </>
  )
}

export default Projcets