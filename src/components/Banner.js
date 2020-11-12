import React, { Component } from "react";
import FacebookIcon from "@material-ui/icons/Facebook";

class Banner extends Component {
  state = {};
  render() {
    return (
      <div className="banner">
        <div className="banner__img"></div>
        <div className="banner__textbox">
          <div className="banner__text__heading">I AM INUSHA MANAWADU</div>
          <div className="baneer__story">
            <p>Software Engineering Undergraduate From IIT Sri Lanka</p>
          </div>
          <input className="banner__button" type="submit" value="Contact Me" />
        </div>
      </div>
    );
  }
}

export default Banner;
