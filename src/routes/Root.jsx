import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import App from "../App";
import EditCard from "../components/EditCard";

export const Root = ({ steps }) => (
  <Switch>
    <Route path="/" exact component={App} />
    <Route path="/:id/editing" render={() => <EditCard steps={steps} />} />
    <Redirect to="/" />
  </Switch>
);
