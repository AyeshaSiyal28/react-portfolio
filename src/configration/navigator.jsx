import { Routes,Route } from "react-router-dom";
import {Home,Projects,About,Contact,Services} from '../pages'
 const Navigator=()=>{
    return(
        <>
        <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/Projects" element={<Projects/>}/>
         <Route path="/Services" element={<Services/>}/>
        <Route  path="/About" element={<About/>}/>
        <Route  path="/Contact" element={<Contact/>}/>
        </Routes>
        </>
    )
 }
 export default Navigator