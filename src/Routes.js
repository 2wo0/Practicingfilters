import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./Pages/Solidarite/MainPage";
import PostDetailPage from "./Pages/PostDetail/PostDetailPage";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/detail" component={PostDetailPage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
