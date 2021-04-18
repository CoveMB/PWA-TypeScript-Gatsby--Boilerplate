import React, { ReactElement } from "react";

import Layout from "components/shared/layout/Layout";
import SEO from "components/shared/layout/Seo";

export default function NotFoundPage(): ReactElement {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>Dang you just hit a route that doesn&#39;t exist... </p>
    </Layout>
  );
}
