import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardText from "react-md/lib/Cards/CardText";
import UserLinks from "../UserLinks/UserLinks";
import config from "../../../data/SiteConfig";

import image from "./what-is-progressive-web-app.png";

import "./About.scss";

class About extends Component {
  render() {
    return (
      <div className="about-container md-grid mobile-fix">
        <Card className="md-grid md-cell--8">
          <div className="about-wrapper">
            <CardText>
              <h2>About us?</h2>
            </CardText>
           
            <CardText>
              <p className="about-text md-body-1">
                We just like the best stuff.
                              </p>
              <p className="about-text md-body-1">

             </p>

            </CardText>
            <UserLinks labeled config={config} />
          </div>
        </Card>
      </div>
    );
  }
}

export default About;
