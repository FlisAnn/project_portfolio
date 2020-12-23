import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";

const ProjectCard = ({ project }) => {
  return (
    <Card.Group>
      <Card>
        <Image src={project.image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{project.name}</Card.Header>
          <Card.Meta>{project.extra}</Card.Meta>
          <Card.Description>{project.description}</Card.Description>
        </Card.Content>
        <Card.Content>
          <a href={project.url}>
            <Icon name="external" id={`urlIcon-${project.id}`} />
          </a>
          <a href={project.github}>
            <Icon name="github square" id={`gitIcon-${project.id}`} />
          </a>
        </Card.Content>
      </Card>
    </Card.Group>
  );
};

export default ProjectCard;
