import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { blue800, white } from 'material-ui/styles/colors';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
  buttonStyle: {
    margin: 20,
  },
};


export default class Buttons extends Component {

  state = {
    loginOpen: false,
    registerOpen: false,
  };


  openRegister = () => {
    this.setState({
      registerOpen: true,
      loginOpen: false,
    });
  };

  openLogin = () => {
    this.setState({
      loginOpen: true,
      registerOpen: false,
    });
  };

  render() {
    return (
      <div>
        <div style={styles.container}>
          <RaisedButton
            label="FB Login"
            onTouchTap={this.loginFB}
            style={styles.buttonStyle}
            backgroundColor={blue800}
            labelColor={white}
          />
          <RaisedButton
            label="Register"
            secondary
            onTouchTap={this.openRegister}
            style={styles.buttonStyle}
          />
          <RaisedButton
            label="Login"
            primary
            onTouchTap={this.openLogin}
            style={styles.buttonStyle}
          />
        </div>
      </div>
    );
  }
}

