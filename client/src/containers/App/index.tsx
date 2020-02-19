import * as React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

const Home = React.lazy(() => import("../Home"));
const SamplePage = React.lazy(() => import("../SamplePage"));

const App: React.SFC = () => (
  <Router>
    <React.Suspense
      fallback={
        <div>
          <span>Loading</span>
        </div>
      }
    >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sample" component={SamplePage} />
      </Switch>
    </React.Suspense>
  </Router>
);

export default App;
