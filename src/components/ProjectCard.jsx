import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";

const ProjectCard = ({ project }) => {
  return (
    <Card.Group>
      <Card>
        <Card.Content>
          <Image src={project.image} size="medium" />
          <Card.Header textAlign="center">{project.name}</Card.Header>
          <Card.Meta>{project.extra}</Card.Meta>
          <Card.Meta>{project.extra2}</Card.Meta>
          <Card.Description>{project.description}</Card.Description>
        </Card.Content>
        <Card.Content>
          <a href={project.url}>
            <Icon name="chrome"  color="green" size="large" id={`urlIcon-${project.id}`} />
          </a>
          <a href={project.github}>
            <Icon name="github square" color="teal" size="large" id={`gitIcon-${project.id}`} />
          </a>
          <a href={project.github2}>
            <Icon name="github square" color="blue" size="large" id={`gitIcon-${project.id}`} />
          </a>
        </Card.Content>
      </Card>
    </Card.Group>
  );
};

export default ProjectCard;
