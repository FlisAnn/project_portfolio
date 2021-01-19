import React from "react";
import { Container, Image, Segment } from "semantic-ui-react";

const src = "./images/ann_square.png";

const Hello = () => {
  return (
    <Container>
      <h1 data-cy="hello">Welcome </h1>
      <Segment padded="very">
        <h2>
          <Image src={src} size="tiny" spaced />
          Who am I?
        </h2>
        <p>
          My name is Ann Flismark and I am a student attending a 12 weeks boot
          camp at Craft Academy. Here I'm learning various technics as ruby,
          html, css, react, test driven development and much more. We pair
          program in almost all of our projects and use tools as GitHub,
          Netlify, Heroku.
        </p>
        <h2>Making a change</h2>
        <p>
          I have been working in IT for 13 years as a Test Manager and QA
          Engineer. Due to Corona my job disappeared in March 2020. After
          reflecting over my situation I decided I would take the opportunity to
          learn something new and change career. I really enjoy working in IT
          and software and know like I have valuable experiences that I could
          bring with me into my new profession.
        </p>
        <h2>Now what?</h2>
        <p>
          My boot camp finishes in the beginning of February 2021. From then on
          I am at the markets disposal. I would really like to work using the
          programming languages I've learned during these months such as React
          and Ruby on Rails. I enjoy working in teams and pair programming has
          been an amazing experience. I know I have a lot left to learn but also
          that I am a very eager learner who is hungry for writing code and
          creating awesome software.
        </p>
      </Segment>
    </Container>
  );
};

export default Hello;
