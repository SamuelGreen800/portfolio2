import Image from "next/image";

const About = () => {
    return (
        <div className="about-container">
            <h2>About Me</h2>
            <div className="flex-about">
                <div className="about-text">
                    <p>
                    This site is a work in progress. Although not particularly ready to deploy, it is being developed in production as a learning experience, and to familiarize myself with netlify's CI/CD procedures. 
                    </p>
                    <p>Many thanks to olawanlejoel, renebitter, and leerob. Their designs and code have acted as both the inspiration and guide for this site. </p>
                </div>
                <div className="about-img">
                    <Image src='/images/about.jpeg' className="profile-img" width={300} height={500} alt="Joe and animal relaxing and having fun" />
                </div>
            </div>
        </div>

    )
}

export default About;