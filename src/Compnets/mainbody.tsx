import { useEffect } from "react";

var i=0;
var txt:string ="Developer  Student  Programmer "
function typeWriter() {
    if (i < txt.length) {
      if (txt.charAt(i) === " ") {
        setTimeout(() => {
          document.getElementById("highlight").innerHTML = "";
          i++;
          typeWriter(); // Call typeWriter immediately after setting the space
        }, 3000); // Pause for 3 seconds for space
      } else {
        document.getElementById("highlight").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, 70); // Continue with 150 milliseconds for other characters
      }
    } else {
      // Reset for continuous loop
      
      setTimeout(typeWriter, 2500);
      i = -1;
      
       
    }
  }


    
    
    

export function Mainbody(){
    useEffect(() => {
        typeWriter();
    }, []);

    return(
        <main>
            <div className="Maincontent">
            <h1 id="h11">Hi I'm Anjesh </h1>
            <h2 id="h22">I'm <span id="highlight"></span></h2>

            </div>
        </main>
    )


}