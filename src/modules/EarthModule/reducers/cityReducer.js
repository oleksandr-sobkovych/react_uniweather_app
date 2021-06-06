import { SET_CURRENT_CITY } from "../actions/actionTypes";

const initialState = { city: "Lviv" };

const citySelectReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_CITY:
      return { ...state, city: action.payload };
    default:
      return state;
  }
};

export default citySelectReducer;
