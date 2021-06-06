import { combineReducers } from "redux";
import cityReducer from "./modules/EarthModule/reducers/cityReducer";

const rootReducer = combineReducers({
  cityObj: cityReducer,
});

export default rootReducer;
