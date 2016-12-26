import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { greenA700, blue800, white } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
  buttonStyle: {
    margin: 20,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: greenA700,
  },
});

class Main extends Component {

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
      <MuiThemeProvider muiTheme={muiTheme}>
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
      </MuiThemeProvider>
      );
  }
}

export default Main;
