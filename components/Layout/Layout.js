import React from "react";
import Header from "./Header";
import Container from "../ui/Container";

const Layout = (props) => {
  return (
    <Container>
      <Header />
      {props.children}
    </Container>
  );
};

export default Layout;
