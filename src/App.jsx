import { BrowserRouter } from 'react-router-dom'
import Navigator from './configration/navigator'
import Navbar from './component/Navbar'
import './App.css'

function App() {

  return (
    <>
     <BrowserRouter>
      <Navbar/>   
       <Navigator/>
     </BrowserRouter>
     </>
  )
}

export default App
