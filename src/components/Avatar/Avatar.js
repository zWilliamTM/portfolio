import React from "react";
import avatar from "../../assets/images/will.jpg";
import "./styles.css";

export const Avatar = (props) => (
  <div {...props}>
    <img className="picture-image" src={avatar} width="320" height="320" />
  </div>
);
