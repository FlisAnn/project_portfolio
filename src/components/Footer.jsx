import React from "react";
import { Container } from "semantic-ui-react";

const Footer = () => {
  return (
    <footer data-cy="footer">
      <p data-cy="footer">Made with React {React.version}</p>
    </footer>
  );
};

export default Footer;
