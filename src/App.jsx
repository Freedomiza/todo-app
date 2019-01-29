
import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom'; // react-router v4
import { createBrowserHistory } from 'history';
import { PersistGate } from 'redux-persist/integration/react';

import configureStore from './store';

// import logo from './logo.svg';
import './App.scss';
import { AppContentContainer } from './container/AppContent';
import { LoginContainer } from './container/Login';
import createFirebase from './provider/firebase';
import { AuthenticatedRoute } from './components';
import ROUTE_URL from './consts/route-url';

const history = createBrowserHistory();
const { store, persistor } = configureStore(history);

// TODO: create fbProvider
const fbApp = createFirebase();
// console.log(fbApp);

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        { /* place ConnectedRouter under Provider */ }
        { /* your usual react-router v4 routing */ }
        <Switch>
          {/* App Content */}
          <AuthenticatedRoute path={ROUTE_URL.APP} component={AppContentContainer} />
          {/* Authentication Routes */}
          <Route exact path={ROUTE_URL.LOGIN} component={LoginContainer} />
          {/* Redirect remining routes */}
          {/* <Redirect from="/" to={ROUTE_URL.LOGIN} /> */}
          <Route render={() => (<div>404</div>)} />
        </Switch>
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);
