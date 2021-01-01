import React from "react";
import { Container, Segment } from "semantic-ui-react";

const Hello = () => {
  return (
    <Container>
      <Segment raised>
      <h1 data-cy="hello">Welcome</h1>
      <p>Welcome to my place on the net. Here you can find my resume as well as the projects I've created during my boot camp at Craft Academy.</p>
      </Segment>
    </Container>
  );
};

export default Hello;