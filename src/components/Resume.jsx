import React from "react";
import { Container, Item, Label, Divider } from "semantic-ui-react";

const About = () => {
  return (
    <Container>
      <h1 data-cy="resume-header">My Resume</h1>
      <Divider horizontal>Work Experience</Divider>
      <Item.Group divided>
        <Item>
          <Item.Image size="tiny" src="./images/telenor.jpeg" />

          <Item.Content>
            <Item.Header as="a">Test Manager</Item.Header>
            <Item.Meta>
              <span>Telenor</span>
            </Item.Meta>
            <Item.Description>
              Test Manager for the Backend department at Telenor.{" "}
            </Item.Description>
            <Item.Extra>
              <Label>Backend</Label>
              <Label>Agile Team Lead</Label>
              <Label>Scrum | SAFe'</Label>
            </Item.Extra>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image size="tiny" src="./images/zington.jpeg" />

          <Item.Content>
            <Item.Header as="a">Consultant</Item.Header>
            <Item.Meta>
              <span className="cinema">Zington</span>
            </Item.Meta>
            <Item.Description>
              Variout assignments as Test Lead, Senior Tester and Acceptance
              Test Lead
            </Item.Description>
            <Item.Extra>
              <Label>Skandia</Label>
              <Label>Kuoni</Label>
              <Label>Scandic Hotels</Label>
              <Label>HM</Label>
            </Item.Extra>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image size="tiny" src="./images/blocket.jpeg" />

          <Item.Content>
            <Item.Header as="a">Test Manager</Item.Header>
            <Item.Meta>
              <span className="cinema">Blocket</span>
            </Item.Meta>
            <Item.Description>
              Test Manager and tester at Sweden's largest market place
            </Item.Description>
            <Item.Extra>
              <Label>XP-programming</Label>
              <Label>Test driven Development</Label>
            </Item.Extra>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image size="tiny" src="./images/bwin.jpeg" />

          <Item.Content>
            <Item.Header as="a">Test Lead & QA Engineer</Item.Header>
            <Item.Meta>
              <span className="cinema">bwin / Ongame / Amaya </span>
            </Item.Meta>
            <Item.Description>Test Manager and tester</Item.Description>
            <Item.Extra>
              <Label>Session Based Testing</Label>
              <Label>Scrum</Label>
              <Label>Kanban</Label>
              <Label>Test driven Development</Label>
              <Label>Scrum Master</Label>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>

      <Divider horizontal>Education</Divider>
      <Item.Group>
        <Item>
          <Item.Image size="tiny" src="./images/craft.jpeg" />

          <Item.Content>
            <Item.Header as="a">Craft Academy</Item.Header>
            <Item.Meta>
              <span>October 2020 - February 2021</span>
            </Item.Meta>
            <Item.Description>
              12 week boot camp to become a Full Stack Developer
            </Item.Description>
            <Item.Extra>
              <Label>React</Label>
              <Label>Ruby</Label>
              <Label>Cypress</Label>
              <Label>RSpec</Label>
              <Label>Scrum</Label>
            </Item.Extra>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image size="tiny" src="./images/sh.jpeg" />

          <Item.Content>
            <Item.Header as="a">Södertörns Högskola</Item.Header>
            <Item.Meta>
              <span>2004 - 2007</span>
            </Item.Meta>
            <Item.Description>
              Bachelor Degree in IT, Media & Design
            </Item.Description>
            <Item.Extra>
              <Label>PHP</Label>
              <Label>Java</Label>
              <Label>Database</Label>
              <Label>Project Management</Label>
            </Item.Extra>
          </Item.Content>
        </Item>

        <Divider horizontal>Licenses & certifications</Divider>
        <Item>
          <Item.Image size="tiny" src="./images/sa.jpeg" />

          <Item.Content>
            <Item.Header as="a">Certified Scrum Product Owner</Item.Header>
            <Item.Meta>
              <span>2015</span>
            </Item.Meta>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image size="tiny" src="./images/sa.jpeg" />

          <Item.Content>
            <Item.Header as="a">Certified Scrum Master</Item.Header>
            <Item.Meta>
              <span>2010</span>
            </Item.Meta>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image size="tiny" src="./images/istqb.jpeg" />

          <Item.Content>
            <Item.Header as="a">ISTQB Certified Tester</Item.Header>
            <Item.Meta>
              <span>2008</span>
            </Item.Meta>
          </Item.Content>
        </Item>
      </Item.Group>
    </Container>
  );
};

export default About;
