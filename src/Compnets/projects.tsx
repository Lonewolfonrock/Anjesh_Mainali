import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';


interface projectprops{
    images:string;
    title:string;
    linkwebsite:string;
    linkgithub:string
    
}



const Project: React.FC<projectprops> = ({ images, title,linkgithub,linkwebsite }) => {



    return(
       
            <div className="pcontent_item">
                <img src={images} alt="Project"/>
                <h2 className="ptitle">{title}</h2>
                <div className='btbottom'>
                <a href={linkgithub} target="_blank" className='a1'><FontAwesomeIcon icon={faGithub} /> View on Github</a>
                <a href={linkwebsite} target="_blank"  className='a2'><FontAwesomeIcon icon={faGlobe} /> View on website</a>
                </div>
            
            </div>    
            
        
        
            
        
    )


}

export default Project;