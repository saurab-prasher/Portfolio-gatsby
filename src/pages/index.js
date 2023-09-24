import * as React from "react";
import Layout from "../components/layout.js";

const IndexPage = () => {
  return (
    <Layout pageTitle='Welcome to my Gatsby Portfolio site!'>
      <p>I'm making this by following the Gatsby tutorial</p>
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
