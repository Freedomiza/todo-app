
import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router'; // react-router v4
import { createBrowserHistory } from 'history';
import { PersistGate } from 'redux-persist/integration/react';

import configureStore from './store';

// import logo from './logo.svg';
import './App.scss';
import { HomeContainer } from './container/Home';
import { LoginContainer } from './container/Login';
import createFirebase from './provider/firebase';
import { AuthenticatedRoute } from './components';
import ROUTE_URL from './consts/route-url';

const history = createBrowserHistory();
const { store, persistor } = configureStore(history);

const fbApp = createFirebase();

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        { /* place ConnectedRouter under Provider */ }
        { /* your usual react-router v4 routing */ }
        <Switch>
          <AuthenticatedRoute exact path={ROUTE_URL.APP} component={HomeContainer} />
          <Route exact path={ROUTE_URL.LOGIN} component={LoginContainer} />
          <Redirect from="/" to={ROUTE_URL.LOGIN} />
          <Route render={() => (<div>404</div>)} />
        </Switch>
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);
