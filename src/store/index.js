import {
  applyMiddleware, combineReducers, createStore, compose,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createEpicMiddleware } from 'redux-observable';
import { connectRouter } from 'connected-react-router';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import { persistStore, persistReducer } from 'redux-persist';


import rootReducer from './reducer';
import rootEpic from './epic';

const persistConfig = {
  key: 'root',
  storage,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware();
const middlewareEnhancer = applyMiddleware([thunkMiddleware, epicMiddleware]);
const composedEnhancers = composeEnhancers(
  middlewareEnhancer,
);

const preloadedState = {};

export default (history) => {
  const persistedReducer = persistReducer(persistConfig, combineReducers({
    ...rootReducer,
    router: connectRouter(history),
  }));
  const store = createStore(persistedReducer, preloadedState, composedEnhancers);
  const persistor = persistStore(store);
  epicMiddleware.run(rootEpic);
  return { store, persistor };
};
