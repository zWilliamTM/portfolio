import React from "react";
import { Route, Switch } from "react-router-dom";
import { Header } from "./components";
import { Home, About, Projects } from "./pages";
import "./styles.css";

export const App = () => (
  <div className="initialcss">
    <Header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </Header>
  </div>
);
