import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Databasesdata{
    id: number,
    icon: IconDefinition, // Change the type to IconDefinition
    title: string,
    content: string,
    style:string
}

export default function Databases(props_d:Databasesdata){
    return(
        <div className="database">
            <div className='database-inner'>
            <FontAwesomeIcon icon={props_d.icon} size='2xl' style={{ color: props_d.style }} id='logo' />
            <h3>{props_d.title}</h3>
            </div>
        </div>
    )


}