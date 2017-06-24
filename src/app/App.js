import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import store from './store';

import User from '../user/User';
import Event from '../event/Event';
import Question from '../question/Question';

import './App.css';

// import logo from './logo.svg';
const history = createHistory();

const App = () =>
  (<Provider store={store}>
    {/* ConnectedRouter will use the store from Provider automatically */}
    <ConnectedRouter history={history}>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Main App</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <ul>
          <li><Link to="/">User</Link></li>
          <li><Link to="/event">Event</Link></li>
          <li><Link to="/question">Question</Link></li>
        </ul>

        <hr />
        <div>
          <Route path="/user" component={User} />
          <Route path="/event" component={Event} />
          <Route path="/question" component={Question} />
        </div>
      </div>
    </ConnectedRouter>
  </Provider>);

export default App;
