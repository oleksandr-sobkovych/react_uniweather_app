import {
  SET_CURRENT_CITY,
  GET_ALL_CITIES_FAIL,
  GET_ALL_CITIES_SUCCESS,
} from "../actions/actionTypes";

const initialState = { city: "", all_cities: [] };

const citySelectReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_CITY:
      return { ...state, city: action.payload };
    case GET_ALL_CITIES_SUCCESS:
      return { ...state, all_cities: action.payload };
    case GET_ALL_CITIES_FAIL:
      return { ...state, all_cities: action.payload };
    default:
      return state;
  }
};

export default citySelectReducer;
