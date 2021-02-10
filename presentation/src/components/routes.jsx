import React from "react";
import { Switch, Route } from "react-router-dom";

import HelloSSR from "./hello-ssr";
import TestComponent from "./test-component";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <HelloSSR />
      </Route>
      <Route exact path="/test">
        <TestComponent />
      </Route>
    </Switch>
  );
}
