// import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';


// const routes = {
//   path: '/',
//   component: Main,
//   indexRoute: { component: Main },
//   childRoutes: [
//     { path: 'app', component: UserDashBoard },
//     // { path: 'inbox', component: Inbox },
//   ],
// };

// render(<Router history={browserHistory} routes={routes} />, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import Main from './component/Main';
import TabsSwipeable from './component/TabsSwipeable';
import Buttons from './component/Buttons';
import { Router, Route, hashHistory } from 'react-router';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render((
  <Main>
    <Router history={hashHistory}>
      <Route path="/" component={Buttons} />
      {/* add the routes here */}
      <Route path="/ts" component={TabsSwipeable} />
    </Router>
  </Main>
), document.getElementById('root'));
