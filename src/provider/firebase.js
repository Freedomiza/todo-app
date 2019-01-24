// This import loads the firebase namespace.
import firebase from 'firebase/app';
// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/database';

const fbConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FB_DB_URL,
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
  storageBucket: '',
  messagingSenderId: process.env.REACT_APP_FB_SENDER_ID,
};
const createFirebase = () => {
  const fbApp = firebase.initializeApp(fbConfig);
  return fbApp;
};

export default createFirebase;
