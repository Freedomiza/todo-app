
const initialState = {

};

export const todoRedcuer = (state = initialState, action) => {
  switch (action.type) {
    case 'ACTION_TYPE':
      return {
        ...state,
      };
    default:
      return state;
  }
}
;