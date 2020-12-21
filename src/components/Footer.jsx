import React from "react";
import { Container } from "semantic-ui-react";

const Footer = () => {
  return (
    <Container>
      <p data-cy="footer">Made with React {React.version}</p>
    </Container>
  );
};

export default Footer;
