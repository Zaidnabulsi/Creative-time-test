import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
// react plugin for creating vector maps

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import ContentCopy from "@material-ui/icons/ContentCopy";
import Store from "@material-ui/icons/Store";
import InfoOutline from "@material-ui/icons/InfoOutline";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Refresh from "@material-ui/icons/Refresh";
import Edit from "@material-ui/icons/Edit";
import Place from "@material-ui/icons/Place";
import ArtTrack from "@material-ui/icons/ArtTrack";
import Language from "@material-ui/icons/Language";

// core components
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import Table from "../components/Table/Table.js";
import Button from "../components/CustomButtons/Button.js";
import Danger from "../components/Typography/Danger.js";
import Card from "../components/Card/Card.js";
import CardHeader from "../components/Card/CardHeader.js";
import CardIcon from "../components/Card/CardIcon.js";
import CardBody from "../components/Card/CardBody.js";
import CardFooter from "../components/Card/CardFooter.js";

import appStyle from "../assets/assets/jss/material-dashboard-pro-react/layouts/dashboardStyle.js";

import dashboardStyle from "../assets/assets/jss/material-dashboard-pro-react/views/dashboardStyle";
import "../assets/assets/scss/material-dashboard-pro-react.css"



var mapData = {
  AU: 760,
  BR: 550,
  CA: 120,
  DE: 1300,
  FR: 540,
  GB: 690,
  GE: 200,
  IN: 200,
  RO: 600,
  RU: 300,
  US: 2920
};

class Home extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const d = new Date();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', "Friday", 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novermber', 'December'];

    const { classes } = this.props;
    return (
      <div>
        <div className={classes.welcomeText}>
          Welcome Dr. Abdul Rahman
        </div>
        <div className={classes.date}>
          Today is { daysOfWeek[d.getDay()] }, { d.getDate() } { months[d.getMonth()] } { d.getFullYear() }
        </div>
        <GridContainer>
          <GridItem xs={12}>
            <Card>
              <CardHeader color="success" icon>
                <CardIcon color="success">
                  <Language />
                </CardIcon>
                <h4 className={classes.cardIconTitle}>
                  Today's operations
                </h4>
              </CardHeader>
              <CardBody>
                <GridContainer justify="space-between">
                  <GridItem xs={12} sm={12} md={5}>
                    <Table
                      tableData={[
                        [
                          "Patient A",
                          "Theater X",
                          "2 Hours"
                        ],
                        [
                          "Patient B",
                          "Theater Y",
                          "1 Hour"
                        ],
                        [
                          "Patient C",
                          "Theater Z",
                          "1 Hour"
                        ],
                        [
                          "Patient D",
                          "Theater X",
                          "1 Hour"
                        ],
                        [
                          "Patient E",
                          "Theater Y",
                          "1 Hour"
                        ],
                        [
                          "Patient F",
                          "Theater Z",
                          "1 Hour"
                        ]
                      ]}
                    />
                  </GridItem>
                </GridContainer>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Home);
