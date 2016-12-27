import React from 'react';
import { greenA700 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: greenA700,
  },
});

const Main = props => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div style={styles.container}>
      <div>{props.children}</div>;
    </div>
  </MuiThemeProvider>
);

Main.propTypes = {
  children: React.PropTypes.element.isRequired,
};
// export default class Main extends Component {

//   state = {
//   };

//   render() {
//     return (
//       <MuiThemeProvider muiTheme={muiTheme}>
//         <div style={styles.container}>

//         </div>
//       </MuiThemeProvider>
//     );
//   }
// }
