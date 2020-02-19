import * as React from "react";

import Layout from "../../components/layout";

const SamplePage: React.SFC = () => (
  <Layout>
    <h2>Dynamic Page</h2>
    <p>This page was loaded hot asynchronously!!!</p>
  </Layout>
);

export default SamplePage;
