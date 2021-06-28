import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Post from "./Pages/Posts/Post";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Post} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
