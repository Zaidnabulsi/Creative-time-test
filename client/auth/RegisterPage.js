import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

// @material-ui/icons
import Timeline from "@material-ui/icons/Timeline";
import Code from "@material-ui/icons/Code";
import Group from "@material-ui/icons/Group";
import Business from "@material-ui/icons/Business";
import Person from "@material-ui/icons/Person";
import Email from "@material-ui/icons/Email";
import LockOutline from "@material-ui/icons/LockOutline";
import Check from "@material-ui/icons/Check";

// core components
import GridContainer from "./../components/Grid/GridContainer.js";
import GridItem from "./../components/Grid/GridItem.js";
import Button from "./../components/CustomButtons/Button.js";
import CustomInput from "./../components/CustomInput/CustomInput.js";
import InfoArea from "./../components/InfoArea/InfoArea.js";
import Card from "./../components/Card/Card.js";
import CardBody from "./../components/Card/CardBody.js";

import registerPageStyle from "./../assets/assets/jss/material-dashboard-pro-react/views/registerPageStyle";

import TextField from '@material-ui/core/TextField'
import Grid from "@material-ui/core/Grid";
import {create} from './api-user.js'


class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [],
      trust: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      open: false,
      error: ''
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }

  handleChange = name => event => {
    this.setState({[name]: event.target.value})
  }

  clickSubmit = () => {
    const newUser = {
      trust: this.state.trust || undefined,
      first_name: this.state.firstName || undefined,
      last_name: this.state.lastName || undefined,
      email: this.state.email || undefined,
      password: this.state.password || undefined
    }
    console.log(newUser);
    create(newUser).then((data) => {
      if (data.error) {
        this.setState({error: data.error})
      } else {
        this.setState({error: '', open: true})
      }
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={10}>
            <Card className={classes.cardSignup}>
              <h2 className={classes.cardTitle}>Register</h2>
              <CardBody>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={8} md={5}>
                    <form className={classes.form}>
                      <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                          <Business />
                        </Grid>
                        <Grid>
                          <TextField label='Trust' value={this.state.trust} onChange={this.handleChange('trust')}/>
                        </Grid>
                      </Grid>
                      <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                          <Person />
                        </Grid>
                        <Grid>
                          <TextField label='First Name' value={this.state.firstName} onChange={this.handleChange('firstName')}/>
                        </Grid>
                      </Grid>
                      <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                          <Person />
                        </Grid>
                        <Grid>
                          <TextField label='Last Name' value={this.state.lastName} onChange={this.handleChange('lastName')}/>
                        </Grid>
                      </Grid>
                      <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                          <Email />
                        </Grid>
                        <Grid>
                          <TextField label='Email' value={this.state.email} onChange={this.handleChange('email')}/>
                        </Grid>
                      </Grid>
                      <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                          <LockOutline />
                        </Grid>
                        <Grid>
                          <TextField label='Password' value={this.state.password} onChange={this.handleChange('password')}/>
                        </Grid>
                      </Grid>
                      <FormControlLabel
                        classes={{
                          root: classes.checkboxLabelControl,
                          label: classes.checkboxLabel
                        }}
                        control={
                          <Checkbox
                            tabIndex={-1}
                            onClick={() => this.handleToggle(1)}
                            checkedIcon={
                              <Check className={classes.checkedIcon} />
                            }
                            icon={<Check className={classes.uncheckedIcon} />}
                            classes={{
                              checked: classes.checked
                            }}
                          />
                        }
                        label={
                          <span>
                            I agree to the{" "}
                            <a href="#pablo">terms and conditions</a>.
                          </span>
                        }
                      />
                      <div className={classes.center}>
                        <Button round color="primary" onClick={this.clickSubmit}>
                          Get started
                        </Button>
                      </div>
                    </form>
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

RegisterPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(registerPageStyle)(RegisterPage);
