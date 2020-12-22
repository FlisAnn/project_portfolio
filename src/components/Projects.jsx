import React, { Component } from "react";
import { Container } from "semantic-ui-react";

class Projects extends Component {
  state = {
    projects: [
      {
        id: 1,
        name: "Address Book",
      },
      {
        id: 2,
        name: "ATM",
      },
    ],
  };
  render() {
    const { projects } = this.state;

    let projectsList = projects.map((project) => {
      return (
        <div data-cy={`project-${project.id}`} key={project.id}>
          <h3>{project.name}</h3>
        </div>
      );
    });

    return (
      <Container>
        <h1 data-cy="projects-header">My Projects</h1>
        {projectList}
      </Container>
    );
  }
}
export default Projects;
