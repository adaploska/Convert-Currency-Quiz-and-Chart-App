import React, { Component } from "react";
import "./memo.css";

const CardStyle = {
  width: "100px",
  height: "100px",
  border: "1px solid red",
  margin: 10,
  float: "left"
};

export class Memo extends React.Component {
  render() {
    return (
      <div className="memocontainer">
        <h1>memo game</h1>
      </div>
    );
  }
}
