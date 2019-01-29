export const HOME_ACTION_TYPE = {
  GET_LIST: 'HOME/GET_LIST',
  GET_LIST_SUCCESS: 'HOME/GET_LIST_SUCCESS',
  GET_LIST_ERROR: 'HOME/GET_LIST_ERROR',
};

export const getData = payload => ({
  type: HOME_ACTION_TYPE.GET_LIST,
  payload,
});

export const getDataSuccess = payload => ({
  type: HOME_ACTION_TYPE.GET_LIST_SUCCESS,
  payload,
});

export const getDataError = payload => ({
  type: HOME_ACTION_TYPE.GET_LIST_ERROR,
  payload,
});
