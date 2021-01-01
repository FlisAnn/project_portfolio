import React from "react";
import { Menu, Segment } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <Segment inverted>
      <Menu inverted secondary>
      <Menu.Item 
        data-cy="header" 
        name="home"
        as={Link}
        to={{ pathname: "/" }} 
        />
        <Menu.Item 
        data-cy="resume-tab" 
        name="resume"
        as={NavLink}
        to={{ pathname: "/resume" }} 
        />
        <Menu.Item 
        data-cy="projects-tab" 
        name="my projects"
        as={NavLink}
        to={{ pathname: "/projects" }} 
        />
      </Menu>
    </Segment>
  );
};
export default Header;
