import React from 'react';
import ReactDOM from 'react-dom';
// import Main from './component/Main';
// import TabsSwipeable from './component/TabsSwipeable';
// import Buttons from './component/Buttons';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();
// const App = props => (
//   <div>
//     <h1>React Router Tutorial</h1>
//     <ul role="nav">
//       <li><Link to="/bt">Buttons</Link></li>
//       <li><Link to="/ts">TabsSwipeable</Link></li>
//     </ul>
//   </div>
// );
// ReactDOM.render(
//   <div>
//     <Main>
//       <Router history={hashHistory}>
//         <Route path="/" component={App} />
//         <Route path="/bt" component={Buttons} />
//         <Route path="/ts" component={TabsSwipeable} />
//       </Router>
//     </Main>
//   </div>,
//   document.getElementById('root'),
// );
import About from './modules/About';
import Repos from './modules/Repos';
import App from './modules/App';
import Repo from './modules/Repo';
import Home from './modules/Home';

const render = ReactDOM.render;
render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      {}
      <IndexRoute component={Home} />
      <Route path="/repos" component={Repos} />
      {}
      <Route path="/repos" component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo} />
      </Route>
      <Route path="/about" component={About} />
    </Route>
  </Router>,
  document.getElementById('app'),
);

