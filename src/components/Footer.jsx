import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {

  return (
    <footer style={{color:"#fff",backgroundColor: "#4A235A"}} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <p>
          <small className="text-muted">
          © Upadhya Silumini Aththanayaka, 2023. All rights reserved.
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
