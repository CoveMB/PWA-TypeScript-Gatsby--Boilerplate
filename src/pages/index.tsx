import { Link } from "gatsby";
import React, { ReactElement } from "react";

import Layout from "components/shared/Layout";
import SEO from "components/shared/Layout/Seo";
import Astronaute from "components/shared/Astronaute";

// The home page
export default function IndexPage(): ReactElement {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi there!</h1>
      <p>Welcome to your PWA boilerplate.</p>
      <div
        style={{
          maxWidth: "300px",
          marginBottom: "1.45rem",
        }}
      >
        <Astronaute />
      </div>
      <Link to="/app/profile/">Go to page 2</Link>
    </Layout>
  );
}
