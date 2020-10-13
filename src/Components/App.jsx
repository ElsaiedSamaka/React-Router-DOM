import React from "react";
import AutherizedLayout from "./AutherizedLayout";
import UNautherizedLayout from "./UnautherizedLayout";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>This is app</h1>
        <Switch>
          <Route exact path="/auth" component={UNautherizedLayout} />
          <Route path="/" component={AutherizedLayout} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
