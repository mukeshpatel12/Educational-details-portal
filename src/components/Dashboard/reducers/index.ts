import { getUniversitiesData } from "./getUniversities";
import { getEducationData } from "./setEducationDetails";
import { universitiesData } from "../../../interfaces/type";

const handler = {
  ...getUniversitiesData,
  ...getEducationData,
};

const initState: universitiesData = {
  universities: [],
  errors: {},
  data: []
};

const educationalDetails = (init: any, handle: any) => {
  return (state = init, action: any) => {
    if (handle.hasOwnProperty(action.type)) {
      return handle[action.type](state, action);
    }
    return state;
  };
};

const educationDetailsReducer = educationalDetails(initState, handler);

export default educationDetailsReducer;
