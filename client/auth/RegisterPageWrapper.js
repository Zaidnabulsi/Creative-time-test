import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import PagesHeader from "../components/Header/PagesHeader.js";
import Footer from "../components/Footer/Footer.js";
import RegisterPage from "./RegisterPage.js";

import pagesStyle from "../assets/assets/jss/material-dashboard-pro-react/layouts/pagesStyle.js";

import bgImage from "../assets/assets/img/register.jpg";

// var ps;

class LoginPageWrapper extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <PagesHeader {...rest} />
        <div className={classes.wrapper} ref="wrapper">
          <div className={classes.fullPage}>
            <RegisterPage/>
            <Footer white />
            <div
              className={classes.fullPageBackground}
              style={{ backgroundImage: "url(" + bgImage + ")" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

LoginPageWrapper.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(pagesStyle)(LoginPageWrapper);
