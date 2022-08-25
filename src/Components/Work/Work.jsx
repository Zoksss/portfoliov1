import "./Work.scss";

import ProjectCard from "./ProjectCard";

function Work() {

    return (
        <div className="work-section">
            <div>
                <p className="colored"> [ Some of my ]</p>
                <h3>Creations</h3>
                <p className="creations-desc">Some of my projects that I worked on since the journey started.</p>
            </div>
            <div className="project-card-wrapper">
                <div className="project-row project-row-1">
                    <ProjectCard />
                    <ProjectCard />
                </div>
                <div className="project-row project-row-2">
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>

            <div className="more-work">
                <h3>More work</h3>
                <p>You can see more of my work on my GitHub Profile.</p>
                <a href="github">github</a>
            </div>
        </div>
    );
}

export default Work;
