import React from "react";
import { Container, Segment } from "semantic-ui-react";

const Hello = () => {
  return (
    <Container>
      <Segment raised>
      <h1 data-cy="hello">Welcome</h1>
      <p>My name is Ann Flismark and this is </p>
      </Segment>
    </Container>
  );
};

export default Hello;