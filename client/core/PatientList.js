import React from "react";
// react component for creating dynamic tables
import ReactTable from "react-table";
import Popup from "reactjs-popup";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Assignment from "@material-ui/icons/Assignment";
import Dvr from "@material-ui/icons/Dvr";
import Favorite from "@material-ui/icons/Favorite";
import Close from "@material-ui/icons/Close";
// core components
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import Button from "../components/CustomButtons/Button.js";
import Card from "../components/Card/Card.js";
import CardBody from "../components/Card/CardBody.js";
import CardIcon from "../components/Card/CardIcon.js";
import CardHeader from "../components/Card/CardHeader.js";

import { dataTable } from "../variables/general.js";

import { cardTitle } from "../assets/assets/jss/material-dashboard-pro-react.js";
import buttonsStyle from "../assets/assets/jss/material-dashboard-pro-react/views/buttonsStyle.js";

const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  }
};

class PatientList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dataTable.patientData.map((prop, key) => {
        return {
          id: key,
          name: prop[0],
          mobileNumber: prop[1],
          dob: prop[2],
          nhs: prop[3],
          mrn: prop[4],
          smoker: prop[5],
          actions: (
            // we've added some custom button actions
            <div className="actions-right">
              {/* use this button to add a edit kind of action */}
              <Button
                justIcon
                round
                simple
                onClick={() => {
                  let obj = this.state.data.find(o => o.id === key);
                  alert(
                    "You've clicked Edit button on \n{ \nName: " +
                      obj.name +
                      ", \nmobileNumber: " +
                      obj.mobileNumber +
                      ", \ndob: " +
                      obj.dob +
                      ", \nnhs: " +
                      obj.nhs +
                      ", \nsmoker: " +
                      obj.smoker +
                      ", \nmrn: " +
                      obj.mrn +
                      "\n}."
                  );
                }}
                color="warning"
                className="edit"
              >
                <Dvr />
              </Button>{" "}
              {/* use this button to remove the data row */}
              <Button
                justIcon
                round
                simple
                onClick={() => {
                  var data = this.state.data;
                  data.find((o, i) => {
                    if (o.id === key) {
                      // here you should add some custom code so you can delete the data
                      // from this component and from your server as well
                      data.splice(i, 1);
                      return true;
                    }
                    return false;
                  });
                  this.setState({ data: data });
                }}
                color="danger"
                className="remove"
              >
                <Close />
              </Button>{" "}
            </div>
          )
        };
      })
    };
  }
  render() {
    const { classes } = this.props;
    return (
      <GridContainer>
        <GridItem xs={12}>
          <Card>
            <CardHeader color="primary" icon>
              <CardIcon color="primary">
                <Assignment />
              </CardIcon>
              <h4 className={classes.cardIconTitle}>Patient List</h4>
            </CardHeader>
            <CardBody>
              <Popup trigger={
                <Button color="primary" className={classes.marginRight}>
                  Primary
                </Button>} position="top left">
                {close => (
                  <div>
                    Content here
                    <a className="close" onClick={close}>
                      &times;
                    </a>
                  </div>
                )}
              </Popup>
              <ReactTable
                data={this.state.data}
                filterable
                columns={[
                  {
                    Header: "Patient Name",
                    accessor: "name"
                  },
                  {
                    Header: "Mobile Number",
                    accessor: "mobileNumber"
                  },
                  {
                    Header: "Date of Birth",
                    accessor: "dob"
                  },
                  {
                    Header: "NHS #",
                    accessor: "nhs"
                  },
                  {
                    Header: "MRN",
                    accessor: "mrn"
                  },
                  {
                    Header: "Smoker",
                    accessor: "smoker"
                  },
                  {
                    Header: "Actions",
                    accessor: "actions",
                    sortable: false,
                    filterable: false
                  }
                ]}
                defaultPageSize={10}
                showPaginationTop
                showPaginationBottom={false}
                className="-striped -highlight"
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(styles)(PatientList);
