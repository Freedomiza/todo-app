import { getDataSuccess, getDataError } from './TodoAction';
import todoProvider from '../../provider/todo';

export const addTodo = () => async (dispatch, getState) => {
  try {
    const data = await todoProvider.getData();
    return dispatch(getDataSuccess(data));
  } catch (err) {
    console.warn(err);
    return dispatch(getDataError());
  }
};


export const getTodosThunk = () => async (dispatch, getState) => {
  try {
    const data = await todoProvider.getData();
    return dispatch(getDataSuccess(data));
  } catch (err) {
    console.warn(err);
    return dispatch(getDataError());
  }
};
