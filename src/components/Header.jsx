import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";

class Header extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <>
        <Menu stackable color="teal">
          <Menu.Item
            data-cy="header"
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
            as={Link}
            to={{ pathname: "/" }}
          />
          <Menu.Item
            data-cy="resume-tab"
            name="resume"
            active={activeItem === "resume"}
            onClick={this.handleItemClick}
            as={NavLink}
            to={{ pathname: "/resume" }}
          />
          <Menu.Item
            data-cy="projects-tab"
            name="my projects"
            active={activeItem === "projects"}
            onClick={this.handleItemClick}
            as={NavLink}
            to={{ pathname: "/projects" }}
          />
        </Menu>
      </>
    );
  }
}
export default Header;
