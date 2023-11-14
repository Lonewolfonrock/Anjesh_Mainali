import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




interface programming_data{
    id: number,
    icon: IconDefinition, // Change the type to IconDefinition
    title: string,
    content: string,
    style:string


}


export default function Language(props:programming_data){
    
    return(
        <div className="languages">
            <div className='language-inner'>
            <FontAwesomeIcon icon={props.icon} size='2xl' style={{ color: props.style }} id='logo' />
            <h3>{props.title}</h3>
            </div>
        </div>
    )



}