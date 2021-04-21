import { Router } from "@reach/router";
import React, { ReactElement } from "react";

import Profile from "components/Profile";
import Layout from "components/shared/Layout";
import PrivateRoute from "components/shared/privateRoute/PrivateRoute";

// Define the routes of the app, those routes will be the ones protected under authentication
export default function App(): ReactElement {
  return (
    <Layout>
      <Router basepath="/app">
        <PrivateRoute path="/profile" component={Profile} />
      </Router>
    </Layout>
  );
}
