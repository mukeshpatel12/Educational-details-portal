import {
    UNIVERSITIES_START,
    UNIVERSITIES_SUCCESS,
    UNIVERSITIES_FAILURE,
    UNIVERSITIE_DETAILS,
    LOGIN_DETAILS
} from "../constant/constants";
import axios from "axios";
import { educationData } from "../interfaces/type";

export const setUserDetails = (name: any) => ({
    type: LOGIN_DETAILS,
    payload: name
});

export const getUniversitiesDetails = (value: any) => {
    return function (dispatch: any): any {
        dispatch({ type: UNIVERSITIES_START });
        axios.get(`http://universities.hipolabs.com/search?name=${value}`)
            .then(({ data }) => {
                dispatch({
                    type: UNIVERSITIES_SUCCESS,
                    payload: data
                });
            })
            .catch((err) => {
                dispatch({
                    type: UNIVERSITIES_FAILURE,
                    payload: err
                });
            });
    };
}

export const getEducationDetails = (details: educationData) => ({
    type: UNIVERSITIE_DETAILS,
    payload: details
});

