import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/login";
import NotFound from "./components/NotFound";
import Home from "./components/home";
import About from "./components/aboutSection";
import Contact from "./components/contactSection";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      {/* <Redirect from="*" to="/" /> */}
      <Route component={NotFound} />
    </Switch>
  );
}
