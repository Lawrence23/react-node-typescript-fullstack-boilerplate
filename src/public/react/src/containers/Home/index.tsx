import * as React from "react";
import { Link } from "react-router-dom";

import Layout from "../../components/layout";

class Home extends React.Component {
  render() {
    async function callExpress() {
      try {
        let response = await fetch("/api/sample/SeanMaxwell").then(res =>
          res.json()
        );
        alert("Hi this is a response from the backend: " + response.response);
      } catch (err) {
        alert(err);
      }
    }

    callExpress();

    return (
      <Layout>
        <Link to="/sample" href="/sample">
          Navigate to Sample Page
        </Link>
      </Layout>
    );
  }
}

export default Home;
