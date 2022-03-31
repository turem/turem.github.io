import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import "./assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import About from "./views/About/AboutPage.js";
import Components from "./views/Components/Components.js";
import Learning from "./views/Learning/Learning.js";

ReactDOM.render(
    <Router>
        <Switch>
            {/* <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} /> */}
            <Route path="/about" component={About} />
            <Route path="/learning" component={Learning} />
            <Route path="/" component={Components} />
        </Switch>
    </Router>,

    document.getElementById("root")
);
