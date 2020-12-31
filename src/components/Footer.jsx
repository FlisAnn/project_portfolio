import React from "react";
import { Container } from "semantic-ui-react";

const Footer = () => {
  return (
    <footer>
      <p data-cy="footer" id="footer">
        Made with React {React.version}
      </p>
    </footer>
  );
};

export default Footer;
