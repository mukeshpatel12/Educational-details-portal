import { universitiesData } from "../../../interfaces/type";
import {
    UNIVERSITIES_START,
    UNIVERSITIES_SUCCESS,
    UNIVERSITIES_FAILURE
} from "../../../constant/constants";

const universitiesStartData = (state: universitiesData) => ({
    ...state,
});

const universitiesSuccessData = (state: universitiesData, action: any) => ({
    ...state,
    universities: action.payload,
});

const universitiesFailureData = (state: universitiesData, action: any) => ({
    ...state,
    errors: action.payload,
});

export const getUniversitiesData = {
    [UNIVERSITIES_START]: universitiesStartData,
    [UNIVERSITIES_SUCCESS]: universitiesSuccessData,
    [UNIVERSITIES_FAILURE]: universitiesFailureData,
};
