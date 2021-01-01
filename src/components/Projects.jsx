import React, { Component } from "react";
import { Container, Divider, Header, Grid } from "semantic-ui-react";
import axios from "axios";
import ProjectCard from "./ProjectCard";
class Projects extends Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    axios.get("./data/projects.json").then((response) => {
      this.setState({ projects: response.data });
    });
  }
  render() {
    const { projects } = this.state;

    let projectsList = projects.map((project) => {
      return (
        <div data-cy={`project-${project.id}`} key={project.id}>
          <ProjectCard project={project} />
        </div>
      );
    });

    return (
      <Container>
        <h1 data-cy="projects-header">My Projects</h1>
        <Divider hidden></Divider>
        <Grid centered columns={3}>
          {projectsList}
        </Grid>
        <Divider hidden></Divider>
      </Container>
    );
  }
}
export default Projects;
