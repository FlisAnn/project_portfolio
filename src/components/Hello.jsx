import React from "react";
import { Container, Segment } from "semantic-ui-react";

const Hello = () => {
  return (
    <Container>
      <Segment raised>
      <h1 data-cy="hello">Welcome</h1>
      <div>
      My name is Ann Flismark and I am a student attending a 12 weeks bootcamp at Craft Academy. Here I'm learning various technics as ruby, html, css, react, test driven development and much more. We pairprogram in almost all of our projects and use tools as GitHub, Netlify, Heroku.
      </div>
      </Segment>
    </Container>
  );
};

export default Hello;