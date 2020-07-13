import { setUserDetailsHandlers } from "./setUserDetails"
import { users } from "../../../interfaces/type";

const handler = {
  ...setUserDetailsHandlers
};

const initState: users = {
  name: "",
};

const userDetails = (init: any, handle: any) => {
  return (state = init, action: any) => {
    if (handle.hasOwnProperty(action.type)) {
      return handle[action.type](state, action);
    }
    return state;
  };
};

const userDetailsReducer = userDetails(initState, handler);


export default userDetailsReducer;
