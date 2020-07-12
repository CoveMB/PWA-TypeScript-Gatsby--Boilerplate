import Layout from 'components/layout/Layout';
import SEO from 'components/layout/Seo';
import React, { FC } from 'react';

const NotFoundPage: FC = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>Dang you just hit a route that doesn&#39;t exist... </p>
  </Layout>
);

export default NotFoundPage;
