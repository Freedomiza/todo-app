import { getDataSuccess, getDataError } from './AppContentAction';
import listProvider from '../../provider/list';

export const getDataThunk = () => async (dispatch, getState) => {
  try {
    const data = await listProvider.getData();
    return dispatch(getDataSuccess(data));
  } catch (err) {
    console.warn(err);
    return dispatch(getDataError());
  }
};
