import './CSS/App.css'
import './CSS/Mainbody.css'
import './CSS/blogsection.css'
import {Header} from './Compnets/header'
import { Mainbody } from './Compnets/mainbody'
import {Skildata} from './Compnets/skills'
import Project from './Compnets/projects'
import projectdata from './Data/projectdata'
import blogdata from './Data/blogdata'
import  Blog  from './Compnets/blog'

function App() {

  const projectdatas = projectdata.map((items)=>{
    return(
      <Project key={items.id} images={items.Image} title={items.title} linkwebsite={items.linkwebsite} linkgithub={items.linkgithub}/>
    )
  })
  const blogdatas = blogdata.map((items)=>{
    return(
      <Blog
      key={items.id} images={items.Images as string} title1={items.title1} title2={items.title2} date={items.date}
    />
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
      <div className="blogmain">
        <div className="project_heading"  id="blog">
        <h3>LATEST</h3>
        <h1>From Blog</h1>
        </div>
        <div className='blogitems'>
          {blogdatas}
        </div>
      </div>
    </>
  )
}
export default App
