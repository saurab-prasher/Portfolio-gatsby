import * as React from "react";
import { Link } from "gatsby";
import Navbar from "./navbar";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  font-family: "Open Sans";
`;

const MainSection = styled.main``;

const Layout = ({ pageTitle, children }) => {
  return (
    <Container>
      <Navbar />
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </Container>
  );
};

export default Layout;
