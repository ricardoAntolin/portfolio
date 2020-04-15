import * as React from "react";

import "./projects.scss";
import Project, { IProject } from "../../shared/project/project";
import ProjectModal from "../../shared/project-modal/project-modal";
import ReactGA from 'react-ga';

interface IState {
  selectedProject?: IProject;
}

interface IProps {
  projectList: IProject[];
}

class Projects extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);

    this.state = { selectedProject: undefined };
  }

  public handleProjectClick = (projectId: number) => {
    let project = this.props.projectList.find(x => x.id === projectId)
    ReactGA.event({
      category: 'User',
      action: `Clicked on project ${project.name}`
    })
    this.setState({
      selectedProject: project
    });
  };

  public handleModalExit = () => {
    this.setState({ selectedProject: undefined });
  };

  public render() {
    const { projectList } = this.props;
    const { selectedProject } = this.state;

    return (
      <section className="section section-secondary">
        <h2>Some of projects i have worked on</h2>

        <div className="projects-container">
          {projectList.map(project => (
            <Project
              key={project.id}
              projectDetails={project}
              projectClick={this.handleProjectClick}
            />
          ))}
        </div>

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            modalExitEvent={this.handleModalExit}
          />
        )}
      </section>
    );
  }
}

export default Projects;
