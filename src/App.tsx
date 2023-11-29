import './CSS/App.css'
import './CSS/Mainbody.css'
import {Header} from './Compnets/header'
import { Mainbody } from './Compnets/mainbody'
import {Skildata} from './Compnets/skills'
import {Project} from './Compnets/projects'

function App() {

  return (
    <>
      <Header/>
      <Mainbody/>
      <Skildata/>
      <Project/>
    </>
  )
}
export default App
