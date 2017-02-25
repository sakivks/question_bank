import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import util from './../../util';

class AppBarExampleIconMenu extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
    actionDisabled: PropTypes.bool.isRequired,
  };

  logout = () => {
    util.clearSession();
  };

  render() {
    return (
      <AppBar
        title={this.props.title}
        iconElementRight={
          (
            <FlatButton
              label={this.props.action}
              disabled={this.props.actionDisabled}
              onTouchTap={this.logout}
            />
          )
        }
      />
    );
  }
}

export default AppBarExampleIconMenu;
