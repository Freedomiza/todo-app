export const TODO_ACTION_TYPE = {
  GET_TODO_LIST: 'TODO/GET_TODO_LIST',
  GET_TODO_LIST_SUCCESS: 'TODO/GET_TODO_LIST_SUCCESS',
  GET_TODO_LIST_ERROR: 'TODO/GET_TODO_LIST_ERROR',

  ADD_TODO: 'TODO/ADD_TODO',
  ADD_TODO_SUCCESS: 'TODO/ADD_TODO_SUCCESS',
  ADD_TODO_ERROR: 'TODO/ADD_TODO_ERROR',

};

export const getData = payload => ({
  type: TODO_ACTION_TYPE.GET_TODO_LIST,
  payload,
});

export const getDataSuccess = payload => ({
  type: TODO_ACTION_TYPE.GET_TODO_LIST_SUCCESS,
  payload,
});

export const getDataError = payload => ({
  type: TODO_ACTION_TYPE.GET_TODO_LIST_ERROR,
  payload,
});

export const addTodo = payload => ({
  type: TODO_ACTION_TYPE.ADD_TODO,
  payload,
});
