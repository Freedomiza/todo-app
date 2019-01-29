import { combineEpics } from 'redux-observable';
import { todoEpic } from '../container/Todo';

export default combineEpics(
  todoEpic,
);