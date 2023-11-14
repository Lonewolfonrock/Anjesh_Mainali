import { useEffect } from "react";
import profile from "../assets/Images/1000_F_605374009_hEUHatmKPzuHTIacg7rLneAgnLHUgegM.jpg" 



import language from "../Data/language";
import Language from "./Language";
import Framework from "./Framework";
import framworksdata from "../Data/framworksdata";
import Database from "../Data/Database";
import Databases from "./Databases";
import Others from "./others";
import othersData from "../Data/othersData";


var i=0;
var txt:string ="Developer  Student  Programmer "
function typeWriter() {
    if (i < txt.length) {
      if (txt.charAt(i) === " ") {
        setTimeout(() => {
          const element = document.getElementById("highlight");
      if (element) {
      element.innerHTML = "";
      }
          i++;
          typeWriter(); // Call typeWriter immediately after setting the space
        }, 2500); // Pause for 3 seconds for space
      } else {
        
        const element = document.getElementById("highlight");
if (element) {
  element.innerHTML += txt.charAt(i);
}
        i++;
        setTimeout(typeWriter, 50); // Continue with 150 milliseconds for other characters
      }
    } else {
      // Reset for continuous loop
      
      setTimeout(typeWriter, 2500);
      i = -1;
      
       
    }
  }

  const main=language.map((items)=>{
    return (
      <Language 
      id={items.id}
      icon={items.icon}
      title={items.title}
      content={items.content}
      style={items.style}

      />
    )
  })

  const framework = framworksdata.map((items)=>{
    return(
      <Framework 
      id={items.id}
      icon={items.icon}
      title={items.title}
      content={items.content}
      style={items.style}
      />
    )
  })
  
  const database = Database.map((items)=>{
    return(
      <Databases
      id={items.id}
      icon={items.icon}
      title={items.title}
      content={items.content}
      style={items.style}
      />
    )
  })

  const others = othersData.map((items)=>{
    return(
      <Others
      id={items.id}
      icon={items.icon}
      title={items.title}
      content={items.content}
      style={items.style}
      />
    )
  })
  
    

export function Mainbody(){
    useEffect(() => {
        typeWriter();
    }, []);

    return(
      <div>
        <main>
          <div className="topmain">
            <div className="Maincontent">
            <h1 id="h11">Hi I'm Anjesh </h1>
            <h1 id="h12">I'm <span id="highlight"></span></h1>
            <h1 id="h13">Who helps your </h1>
            <h1 id="h14">Bussiness Grow</h1>
            </div>
            <img src={profile} id="avatar"/>
          </div>
          <div className="bottom_main">
            <button id="my_work">See my Work</button>
            <button id="start">Start Project</button>
          </div>
        </main>
        <div className="skils">
        <h2 id="skilltext">Skills</h2>
        <div className="maincombo">
        <div className="combo1">
          <div id="skillset">
          <h2 id="programming">Languages</h2>
          {main}
          </div>
          <div id='skillset2'>
          <h2 id="Framwork">Framework</h2>
          {framework}
          </div>
          </div>
        <div className="combo2">
          <div id="skillset3">
          <h2 id="Databases">Databases</h2>
          {database}
          </div>
          <div id="skillset4">
          <h2 id="Others">Others</h2>
          {others}
          </div>
          </div>
          </div>
        </div>

        </div>

       
    )


}