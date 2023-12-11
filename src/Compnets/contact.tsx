import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Contact(){
    return(
        <>
            <div className="contactme" id="cont">
                <div className="innercontent_content">
                <h3 id='contactme'>CONTACT ME</h3>
                <h1 id='project'>Got project? Let Talk.</h1>
                <h2><a className='itemlink' href="https://www.linkedin.com/in/anjesh-mainali-218070284"><FontAwesomeIcon icon={faLinkedin} id='linkedin'/> Contact me on Linkedin</a></h2>
                <h2><a className='itemlink' href=""><FontAwesomeIcon icon={faEnvelope} id='mail'/> Contact me on gmail</a></h2>
                </div>
            </div>
        </>
    )
    


}