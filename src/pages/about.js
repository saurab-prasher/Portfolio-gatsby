import * as React from "react";
import styled from "styled-components";
import Layout from "../components/layout";

const Description = styled.p`
  background-color: #333;
  color: #fff;
  height: 10rem;
`;

const AboutPage = () => {
  return (
    <Layout pageTitle='About me'>
      <Description>I am Saurab Prasher a web developer</Description>
    </Layout>
  );
};

export const Head = () => <title>About Me</title>;

export default AboutPage;
