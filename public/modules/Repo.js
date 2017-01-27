// modules/Repo.js
import React from 'react';

export default React.createClass({
  render() {
    return (
      <div>
        <h2>{`Repo: ${this.props.params.repoName}`}</h2>
        <h2>{`UserName: ${this.props.params.userName}`}</h2>
      </div>
    );
  },
});

