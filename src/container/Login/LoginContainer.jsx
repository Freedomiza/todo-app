import React, { PureComponent } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import { Redirect } from 'react-router';

import ROUTE_URL from '../../consts/route-url';

class LoginContainer extends PureComponent {
  // The component's Local state.
  state = {
    isSignedIn: false, // Local signed-in state.
  };

  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful.
    // Alternatively you can provide a callbacks.signInSuccess function.
    // signInSuccessUrl: '/signedIn',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      // fb.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false,
    },
  };

  componentDidMount = () => {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
      user => this.setState({ isSignedIn: !!user }),
    );
  }

  render() {
    const { isSignedIn } = this.state;
    return (!isSignedIn ? (
      <div>
        <h1>My App</h1>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth
          uiConfig={this.uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    ) : (
      <Redirect to={ROUTE_URL.APP} />
    ));
  }
}

export default LoginContainer;
