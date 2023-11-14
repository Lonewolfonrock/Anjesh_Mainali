import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faJs, faPython } from '@fortawesome/free-brands-svg-icons';
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { faT } from '@fortawesome/free-solid-svg-icons';


const pythonIcon: IconDefinition = faPython;

export default [
    {
        id: 0,
        icon: faJs,
        title: "JavaScript",
        content: "Description of JavaScript",
        style: "#FFDF00", // Valid color code (yellow)
      },
      {
        id: 1,
        icon: faT,
        title: "TypeScript",
        content: "Description of TypeScript",
        style: "#2D79C7", // Valid color name
      },
      {
        id: 2,
        icon: faJava,
        title: "Java",
        content: "Description of Java",
        style: "rgb(255, 0, 0)", // Valid RGB value (red)
      },
      {
        id: 3,
        icon: pythonIcon,
        title: "Python",
        content: "Description of Python",
        style: "black", // Valid color name
      },

]