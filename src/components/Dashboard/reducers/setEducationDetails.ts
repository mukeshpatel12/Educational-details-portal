import { universitiesData } from "../../../interfaces/type";
import { UNIVERSITIE_DETAILS } from "../../../constant/constants";

const setEducationData = (state: universitiesData, action: any) => ({
    ...state,
    data: [
        ...state.data,
        action.payload
    ],
});

export const getEducationData = {
    [UNIVERSITIE_DETAILS]: setEducationData,
};
