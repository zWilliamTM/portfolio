import React from "react";
import { withRouter } from "react-router-dom";
import es_desc from "../assets/texts/es_desc";
import { Avatar } from "../components/Avatar";
import "./home.css";

const Home_ = () => (
  <div className="container">
    <div className="row-col">
      <Avatar className="position-avatar" />
      <h2 className="position-desc">{es_desc}</h2>
    </div>
  </div>
);

export const Home = withRouter(Home_);
