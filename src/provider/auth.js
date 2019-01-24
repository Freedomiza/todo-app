import firebase from 'firebase';

import storage from './storage';
import STORAGE_KEY from '../consts/storage-key';

const getAuthHeader = async () => {
  const token = await storage.get(STORAGE_KEY.TOKEN);
  return {
    Authorization: `Bearer ${token}`,
  };
};
const isAuthenticated = () => {
  console.log(firebase.auth().currentUser);
  return firebase.auth().currentUser;
};

const logout = () => firebase.auth().signOut();

export default {
  getAuthHeader,
  isAuthenticated,
  logout,
};
