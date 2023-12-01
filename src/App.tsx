import './CSS/App.css'
import './CSS/Mainbody.css'
import {Header} from './Compnets/header'
import { Mainbody } from './Compnets/mainbody'
import {Skildata} from './Compnets/skills'
import Project from './Compnets/projects'
import projectdata from './Data/projectdata'

function App() {

  const projectdatas = projectdata.map((items)=>{
    return(
      <Project key={items.id} images={items.Image} title={items.title} linkwebsite={items.linkwebsite} linkgithub={items.linkgithub}/>
    )
  })

  return (
    <>
      <Header/>
      <Mainbody/>
      <Skildata/>
      <div className="projectframe">
        <div className="project_heading">
        <h3>PORTFOLIO</h3>
        <h1>My Projects</h1>
        </div>
        <div className="pcontent">
            {projectdatas} 
            
        </div>
        </div>

    </>
  )
}
export default App
