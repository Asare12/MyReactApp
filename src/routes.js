import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/login";
import NotFound from "./components/NotFound";
import Home from "./components/home";
import About from "./components/aboutSection";
import Contact from "./components/contactSection";
import AppliedRoute from "./components/AppliedRoute";

export default function Routes({ appProps }) {
  return (
    <Switch>
      <AppliedRoute exact path="/" component={Home} appProps={appProps} />
      <AppliedRoute path="/login" component={Login} appProps={appProps} />
      <AppliedRoute path="/about" component={About} appProps={appProps} />
      <AppliedRoute path="/contact" component={Contact} appProps={appProps} />
      {/* <Redirect from="*" to="/" /> */}
      <Route component={NotFound} />
    </Switch>
  );
}
