const Skills = () => {
    return (
        <div className="skills-container">
            <h2>Skills</h2>
            <div className="grid-skills">
                <div className="skill-card html">
                    <i className="fa-brands fa-html5 html-icon"></i>
                    <p>HTML</p>
                </div>
                <div className="skill-card css">
                    <i className="fa-brands fa-css3-alt css-icon"></i>
                    <p>CSS</p>
                </div>
                <div className="skill-card js">
                    <i className="fa-brands fa-js-square js-icon"></i>
                    <p>JavaScript</p>
                </div>
                <div className="skill-card react">
                    <i className="fa-brands fa-react react-icon"></i>
                    <p>React</p>
                </div>
                <div className="skill-card node">
                    <i className="fa-brands fa-node-js node-icon"></i>
                    <p>Node</p>
                </div>
                <div className="skill-card python">
                    <i className="fa-brands fa-python python-icon"></i>
                    <p>Python</p>
                </div>
                <div className="skill-card Java">
                    <i className="fa-brands fa-java"></i>
                    <p>Java</p>
                </div>
                <div className="skill-card aws">
                    <i className="fa-brands fa-aws"></i>
                    <p>aws</p>
                </div>
            </div>
                <div className="grid-skills-2"> 
                <div className="skill-card Git">
                    <i className="fa-brands fa-git-alt fa-2xl"></i>
                    <p>Git</p>
                    </div>
                <div className="skill-card stack-overflow">
                    <i className="fa-brands fa-stack-overflow fa-2xl"></i>
                    <p>Stack Overflow</p>
                </div>
                </div>
        </div>
    )
}

export default Skills;