import React, { Component } from 'react';
import About from './About';
import Consent from './Consent';
import Confirm from './Confirm';
import BasicInfo from './BasicInfo';
import CoughSound from './CoughSound';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const styles = ((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    display: '',
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['About', 'Consent', 'BasicInfo','Sound-Recording','Confirm'];

class UserForm extends Component {
  state = {
    step: 0,
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    coughSoundURL: '',
    aaaSoundURL: '',
    eeeSoundURL: '',
    oooSoundURL: '',
    countSoundURL: '',
    alphabetSoundURL: '',
  };
  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  onSubmit = () => {
    console.log("send the data");
  }
  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  getStepContent = (step) => {
    const {firstName, lastName, email, occupation, city, coughSoundURL, aaaSoundURL, eeeSoundURL, oooSoundURL, countSoundURL, alphabetSoundURL} = this.state;
    const values = {firstName, lastName, email, occupation, city, coughSoundURL, aaaSoundURL, eeeSoundURL, oooSoundURL, countSoundURL, alphabetSoundURL};
    switch (step) {
      case 0:
        return (
          <About
          />
        );
      case 1:
        return (
          <Consent
          handleChange={this.handleChange}
          values={values}
          />
        );
      case 2:
        return (
          /*health info,geographical info, basic info*/
          <BasicInfo
          handleChange={this.handleChange}
          values={values}
          />
        );
      case 3:
        return (
          /* cough, aa,ee,oo,count,alpha sound*/
          <CoughSound
          handleChange={this.handleChange}
          values={values}
          />
        );
      case 4:
        return (
          <Confirm
          handleChange={this.handleChange}
          values={values}
          />
        );
      default:
        (console.log(`the value of unknown step is: ${step}`));
    }
  };

  render() {
    const {classes} = this.props;
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };
    return (
      <React.Fragment>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Covid-Detector
            </Typography>
            <React.Fragment>

              <Stepper activeStep={step} className={classes.stepper}>
                {
                steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              {step === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Thank you for submission.
                  </Typography>
                  <Typography variant="subtitle1">
                    Your input is highly valuable for us.
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {this.getStepContent(step)}
                  <div className={classes.buttons}>
                    {step !== 0 && (
                      <Button onClick={this.prevStep} className={classes.button}>
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={steps===steps.length-1 ? this.onSubmit : this.nextStep}
                      className={classes.button}
                    >
                      {step === steps.length - 1 ? 'Submit' : 'Next'}
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

UserForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserForm);