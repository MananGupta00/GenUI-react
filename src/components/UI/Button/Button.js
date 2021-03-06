import React from "react";
import "./Button.css";

export default function Button(props) {
  return (
    <button className={`btn ${props.large ? "large" : ""}`}>
      {props.text}
    </button>
  );
}
