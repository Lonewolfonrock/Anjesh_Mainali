import { useEffect } from "react";
import profile from "../assets/Images/IMG_20231207_173920-removebg.png" 






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

 /* const main=language.map((items)=>{
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
  */
    

export function Mainbody(){
    useEffect(() => {
        typeWriter();
    }, []);

    return(
      <div>
        <main>
          <div className="topmain" id="topmain">
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
        </div>
    )


}