import { LOGIN_DETAILS } from "../../../constant/constants";
import { users } from "../../../interfaces/type";

const setUserDetailsSuccess = (state: users, action: any) => ({
    ...state,
    name: action.payload,
});

export const setUserDetailsHandlers = {
    [LOGIN_DETAILS]: setUserDetailsSuccess,
};
