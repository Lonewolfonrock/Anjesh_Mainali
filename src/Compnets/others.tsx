import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface others{
    id: number,
    icon: IconDefinition, // Change the type to IconDefinition
    title: string,
    content: string,
    style:string
}
export default function Others(props_o:others){
    return(
        <div className="others">
        <div className='others-inner'>
        <FontAwesomeIcon icon={props_o.icon} size='2xl' style={{ color: props_o.style }} id='logo' />
        <h3>{props_o.title}</h3>
        </div>
    </div>
    )
}



