import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface frameworkdata{
    id: number,
    icon: IconDefinition, // Change the type to IconDefinition
    title: string,
    content: string,
    style:string
}

export default function Framework(props_f:frameworkdata){
    return(
        <div className="framework">
            <div className='framework-inner'>
            <FontAwesomeIcon icon={props_f.icon} size='2xl' style={{ color: props_f.style }} id='logo' />
            <h3>{props_f.title}</h3>
            </div>
        </div>
    )
}