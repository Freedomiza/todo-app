import { HOME_ACTION_TYPE } from './AppContentAction';

const initialState = {
  isFetching: false,
  data: [],
  error: undefined,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case HOME_ACTION_TYPE.GET_LIST:
      return { ...state, isFetching: true };
    case HOME_ACTION_TYPE.GET_LIST_SUCCESS:
      return { ...state, isFetching: false, data: action.payload };
    case HOME_ACTION_TYPE.GET_LIST_ERROR: {
      return { ...state, isFetching: false, error: action.payload };
    }
    default:
      return state;
  }
};
