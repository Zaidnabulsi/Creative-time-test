import React from "react";
import PropTypes from "prop-types";
import Popup from "reactjs-popup";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField'

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
import LockOutline from "@material-ui/icons/LockOutline";
import Business from "@material-ui/icons/Business";
import Person from "@material-ui/icons/Person";

// core components
import GridContainer from "./../components/Grid/GridContainer.js";
import GridItem from "./../components/Grid/GridItem.js";
import CustomInput from "./../components/CustomInput/CustomInput.js";
import Button from "./../components/CustomButtons/Button.js";
import Card from "./../components/Card/Card.js";
import CardBody from "./../components/Card/CardBody.js";
import CardHeader from "./../components/Card/CardHeader.js";
import CardFooter from "./../components/Card/CardFooter.js";

import loginPageStyle from "./../assets/assets/jss/material-dashboard-pro-react/views/loginPageStyle.js";

import {signin} from './api-auth.js'
import auth from './auth-helper'


class LoginPage extends React.Component {
  state = {
    cardAnimaton: "cardHidden",
    trust: '',
    email: '',
    password: '',
    error: '',
    redirectToReferrer: false
  };

  clickSubmit = () => {
    const user = {
      trust: this.state.trust || undefined,
      email: this.state.email || undefined,
      password: this.state.password || undefined
    }
    
    signin(user).then((data) => {
      if (data.error) {
        this.setState({error: data.error})
      } else {
        auth.authenticate(data, () => {
          this.setState({redirectToReferrer: true})
        })
      }
    })
  }

  handleChange = name => event => {
    this.setState({[name]: event.target.value})
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.content}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={6} md={4}>
              <Popup trigger={<button>Trigger</button>} position="top left">
                {close => (
                  <div>
                    Content here
                    <a className="close" onClick={close}>
                      &times;
                    </a>
                  </div>
                )}
              </Popup>
              <form>
                <Card login>
                  <CardBody>
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
                  </CardBody>
                  <CardFooter className={classes.justifyContentCenter}>
                    <Button color="rose" simple size="lg"  onClick={this.clickSubmit} block>
                      Let's Go
                    </Button>
                  </CardFooter>
                </Card>
              </form>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired
};
 
export default withStyles(loginPageStyle)(LoginPage);
