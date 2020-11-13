import * as Actions from "../actions";

const initialState = {
  selectedNavLink: {
    utforska: true,
    allaRecept: false,
    minaRecept: false,
  },
};

function navReducer(state = initialState, action) {
  const data = action.payload;
  switch (action.type) {
    case Actions.SET_SELECTED_NAV:
      return (state = {
        ...state,
        selectedNavLink: data,
      });
    default:
      return state;
  }
}

export default navReducer;
