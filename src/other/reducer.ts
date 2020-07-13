import { combineReducers } from "redux";
import educationDetailsReducer from "../components/Dashboard/reducers";
import userDetailsReducer from "../components/Home/reducers";

export default combineReducers({
   educations: educationDetailsReducer,
   users: userDetailsReducer
});
