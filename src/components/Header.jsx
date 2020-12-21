import React from "react";
import { Menu, Segment } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <Segment inverted>
      <Menu inverted secondary>
      <Menu.Item 
        data-cy="header" 
        name="my portfolio"
        as={Link}
        to={{ pathname: "/" }} 
        />
        <Menu.Item 
        data-cy="about-tab" 
        name="about me"
        as={Link}
        to={{ pathname: "/about" }} 
        />
        <Menu.Item 
        data-cy="projects-tab" 
        name="my projects"
        as={Link}
        to={{ pathname: "/projects" }} 
        />
        <Menu.Item 
        data-cy="resume" 
        name="my resume"
        as={Link}
        to={{ pathname: "/resume" }} 
        />
      </Menu>
    </Segment>
  );
};
export default Header;
