import React from 'react';
import { amber900 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = { container: {} };

const muiTheme = getMuiTheme({ palette: { accent1Color: amber900 } });

const Main = props => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div style={styles.container}>
      <div>{props.children}</div>
    </div>
  </MuiThemeProvider>
);

Main.propTypes = { children: React.PropTypes.element };

export default Main;

