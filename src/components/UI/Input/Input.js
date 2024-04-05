import React from "react";

const Input = (props) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input type={props.type} width={props.width}></input>
    </div>
  );
};

export default Input;
