import * as React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const Layout: React.SFC = props => (
  <div>
    <Link to="/" href="/">
      <h1 className="h1">React + Webpack</h1>
    </Link>
    {props.children}
  </div>
);

export default Layout;
