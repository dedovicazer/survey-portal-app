import ACTION_TYPES from './actionTypes';

const initialState = {
  surveys: [],
  currentSurvey: null,
  currentResults: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_SURVEYS_SUCCESS:
      return {
        ...state,
        surveys: action.surveys,
      };

    case ACTION_TYPES.ADD_NEW_SURVEY_SUCCESS:
      return {
        ...state,
        surveys: [...state.surveys, action.survey],
      };

    case ACTION_TYPES.GET_SURVEY_BY_ID_SUCCESS:
      return {
        ...state,
        currentSurvey: action.survey,
      };

    case ACTION_TYPES.GET_RESULTS_SUCCESS:
      return {
        ...state,
        currentResults: action.results,
      };

    default:
      return state;
  }
};

export default reducer;
