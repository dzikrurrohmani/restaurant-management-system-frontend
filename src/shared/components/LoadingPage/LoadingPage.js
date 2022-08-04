import './LoadingPage.css';
import Lottie from "lottie-react";
import animation from './animation.json'

const LoadingPage = ({title}) => {
    return (
        <div className='backdrop-container'>
            <div className='backdrop-content'>
                <Lottie animationData={animation} loop={true} style={{width:'100px',height:'100px'}}/>
                {title}
            </div>
        </div>
    )
}
export default LoadingPage;
