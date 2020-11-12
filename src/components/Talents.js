import React, { Component } from "react";
import "../styles/talents.css";

class Talents extends Component {
  state = {};
  render() {
    return (
      <div className="talent__boxes">
        <div className="talent__box">
          <h5>Web Development</h5>
          <img src={require("../images/frontend.png")} />
        </div>
        <div className="talent__box">
          <h5>Mobile Applications</h5>
          <img src={require("../images/mobileapp.png")} />
        </div>
        <div className="talent__box">
          <h5>Software Solutions</h5>
          <img src={require("../images/mobileapp.png")} />
        </div>
      </div>
    );
  }
}

export default Talents;
