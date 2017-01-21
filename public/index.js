import React from 'react';
import ReactDOM from 'react-dom';
import Main from './component/Main';
import TabsSwipeable from './component/TabsSwipeable';
import Buttons from './component/Buttons';
import { Router, Route, hashHistory, Link } from 'react-router';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const App = props => (
  <div>
    <h1>React Router Tutorial</h1>
    <ul role="nav">
      <li><Link to="/bt">Buttons</Link></li>
      <li><Link to="/ts">TabsSwipeable</Link></li>
    </ul>
  </div>
);

ReactDOM.render(
  <div>
    <Main>
      <Router history={hashHistory}>
        <Route path="/" component={App} />
        <Route path="/bt" component={Buttons} />
        {}
        <Route path="/ts" component={TabsSwipeable} />
      </Router>
    </Main>
  </div>,
  document.getElementById('root'),
);

