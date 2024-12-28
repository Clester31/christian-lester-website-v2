import ProjectBox from "./ProjectBox"

import projectList from "../../../projectList"

export default function Projects() {
    return (
        <div className="flex flex-col justify-center text-center p-8">
            <div className="projects-title flex flex-col gap-8">
                <h1 className="text-4xl font-semibold">My Projects</h1>
                <p className="text-lg">Click on one of the projects below to try it out or see it&apos;s repository</p>
            </div>
            <div className="project-display flex flex-row gap-8 justify-center mt-8">
                {projectList.map((project, i) => {
                    return (
                        <ProjectBox
                            key={i}
                            image={project.image}
                            title={project.title}
                            desc={project.desc}
                            repoLink={project.repoLink}
                            siteLink={project.siteLink}
                        />
                    )
                })}
            </div>
        </div>
    )
}