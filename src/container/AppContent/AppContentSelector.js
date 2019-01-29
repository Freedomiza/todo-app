import { createSelector } from 'reselect';

const homeSelect = state => state.appContent;
export default {
  isFetching: createSelector(homeSelect, state => state.isFetching),
};
