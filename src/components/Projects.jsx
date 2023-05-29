import { projectData } from './data.js';
import Image from 'next/image.js';


const Projects = () => {
    return (
        <div className="projects-container">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projectData && projectData.map((project) => (
                    <div className="project-card" key={project.id}>
                        <Image
            className="project-img"
            src={project.image}
            quality={100}
            height= '200'
            width= '200'
        />
                        <div className="project-header">
                            <i className="fa-solid fa-link link-icon"></i>
                            <div className="small-icons">
                                <a href={project.gitHubLink}><i className="fa-brands fa-github fa-xl"></i></a>
                            </div>
                        </div>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Projects;