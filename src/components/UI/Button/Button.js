import React from "react";
import classes from "./Button-module.css";

const Button = (props) => {
  return (
    <React.Fragment>
      <button className="button" id={props.id} onClick={props.onClick}>
        {props.children}
      </button>
    </React.Fragment>
  );
};

export default Button;
