import React, { ReactElement } from "react";

import Layout from "components/shared/layout/Layout";
import SEO from "components/shared/layout/Seo";
import { PageTitle } from "styles";

// The login page is the one that unauthenticated user are redirected to
export default function Login(): ReactElement {
  return (
    <Layout>
      <SEO title="Authentication" />
      <PageTitle>
        You need to be authenticated to access this content!
      </PageTitle>
    </Layout>
  );
}
