import  Contact  from "./Contact"
import  Home from "../page/Home"
import Experices from "./Experices"
import About from "./About"
import Project from "./Project"
import Skill from "./Skill"


const Homemain = () => {
  return (
    <div>
     <Home/>
     <About/>
     <Skill/>
     <Project/>
      <Experices/> 
      <Contact/>
    </div>
  )
}

export default Homemain