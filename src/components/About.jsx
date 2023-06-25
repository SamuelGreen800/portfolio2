import Image from "next/image";

const About = () => {
    return (
        <div id="about" className="about-container">
            
            <h2>About Me</h2>
            
            <div className="flex-about">
                <div className="about-text">

                    <p>Hi there! My name is Samuel Green, and I'm a web developer based out of Saint Petersburg, FL. I've always been fascinated by computers, and recently decided to take the plunge into a bootcamp course, taught by Coding Dojo. Upon graduation, I've now thrown myself into a deep dive of both the Spring and Node ecosystems, with React front ends to go with them. </p>
                    <p>
                    I am passionate about food, computers, and the outdoors. The former of which led me to a successful 15 year career in food service management. My next step, however, is to transition into the field of software devlopment. I'm excited to see where this journey takes me, and can't wait to leverage my skills against new problems!
                    </p>
                    <p>Many thanks to olawanlejoel, renebitter, and leerob. Their designs and code have acted as both the inspiration and guide for this site. </p>
                </div>
                <div className="about-img">
                    <Image src='/images/about.jpeg' className="profile-img" width={300} height={500} alt="Harper dog" />
                </div>
            </div>
        </div>

    )
}

export default About;