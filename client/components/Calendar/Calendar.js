import React from "react";
// react component used to create a calendar with events on it
import BigCalendar from "react-big-calendar";
// dependency plugin for react-big-calendar
import moment from "moment";
// react component used to create alerts
import SweetAlert from "react-bootstrap-sweetalert";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Heading from "../Heading/Heading.js";
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import Card from "../Card/Card.js";
import CardBody from "../Card/CardBody.js";

import buttonStyle from "../../assets/assets/jss/material-dashboard-pro-react/components/buttonStyle.js";

import { events } from "../../variables/general.js";

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: events,
      alert: null
    };
    this.hideAlert = this.hideAlert.bind(this);
  }
  selectedEvent(event) {
    alert(event.title);
  }
  addNewEventAlert(slotInfo) {
    this.setState({
      alert: (
        <SweetAlert
          input
          showCancel
          style={{ display: "block", marginTop: "-100px" }}
          title="Input something"
          onConfirm={e => this.addNewEvent(e, slotInfo)}
          onCancel={() => this.hideAlert()}
          confirmBtnCssClass={
            this.props.classes.button + " " + this.props.classes.success
          }
          cancelBtnCssClass={
            this.props.classes.button + " " + this.props.classes.danger
          }
        />
      )
    });
  }
  addNewEvent(e, slotInfo) {
    var newEvents = this.state.events;
    newEvents.push({
      title: e,
      start: slotInfo.start,
      end: slotInfo.end
    });
    this.setState({
      alert: null,
      events: newEvents
    });
  }
  hideAlert() {
    this.setState({
      alert: null
    });
  }
  eventColors(event, start, end, isSelected) {
    var backgroundColor = "event-";
    event.color
      ? (backgroundColor = backgroundColor + event.color)
      : (backgroundColor = backgroundColor + "default");
    return {
      className: backgroundColor
    };
  }
  render() {
    return (
      <div>
        <Heading
          textAlign="center"
          title="Operation Schedule"
        />
        {this.state.alert}
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={10}>
            <Card>
              <CardBody calendar>
                <BigCalendar
                  selectable
                  events={this.state.events}
                  defaultView="month"
                  scrollToTime={new Date(1970, 1, 1, 6)}
                  defaultDate={new Date()}
                  onSelectEvent={event => this.selectedEvent(event)}
                  onSelectSlot={slotInfo => this.addNewEventAlert(slotInfo)}
                  eventPropGetter={this.eventColors}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(buttonStyle)(Calendar);