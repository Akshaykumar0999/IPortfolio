import Theme from '../Theme';
import Profile from "../Profile";
import './index.css'
import Contact from '../Contact';
import TechStack from '../TeckStack';
import Experience from '../Experience';
import Certificates from '../Certificates';
import Education from '../Education';

const FirstCard = () => {
    return(
        <div className='firstcard'>
            <Theme />
            <Profile />
            <Contact />
            <TechStack />
            <Experience />
            <Certificates />
            <Education />
        </div>
    )
}

export default FirstCard