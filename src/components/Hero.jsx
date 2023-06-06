import Image from "next/image";
import Fader from "./Fader";


const Hero = () => {
    return (
        <div className="hero-container">
            <Image src='/images/profile.jpeg' className="profile-img" width={300} height={300} alt="Sam's personal headshot" />
            <div className="hero-text">
                <h1>I'm Sam Green</h1>
                <h3>
                    I'm a Web Dev based in Saint Petersburg, FL </h3>
                <p className="text-secondary"> I build things in <Fader text="Javascript" icon = {<i className="fa-brands fa-js-square js-icon flash-icon"></i>}> </Fader>
                    </p>
                <div className="social-icons">
                    
                    <a
                        href="https://github.com/SamuelGreen800"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/samuel-adam-green//"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero;