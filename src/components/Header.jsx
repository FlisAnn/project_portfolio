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
        as={NavLink}
        to={{ pathname: "/about" }} 
        />
        <Menu.Item 
        data-cy="projects-tab" 
        name="my project"
        as={NavLink}
        to={{ pathname: "/projects" }} 
        />
      </Menu>
    </Segment>
  );
};
export default Header;
