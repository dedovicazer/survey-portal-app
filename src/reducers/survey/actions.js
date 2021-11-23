import ACTION_TYPES from './actionTypes';
import SurveyApi from '../../apis/SurveyApi';

const getSurveysSuccess = (data) => ({
  type: ACTION_TYPES.GET_SURVEYS_SUCCESS,
  surveys: data,
});

export const getSurveys = () => (dispatch) =>
  SurveyApi.getAllSurveys()
    .then(({ data }) => {
      dispatch(getSurveysSuccess(data));
    })
    .catch((errors) => {
      return Promise.reject(errors);
    });

const addNewSurveySuccess = (data) => ({
  type: ACTION_TYPES.ADD_NEW_SURVEY_SUCCESS,
  survey: data,
});

export const addSurvey = (request) => (dispatch) =>
  SurveyApi.addNewSurvey(request)
    .then(({ data }) => {
      dispatch(addNewSurveySuccess(data));
      return data;
    })
    .catch((errors) => {
      return Promise.reject(errors);
    });

const getSurveyByIdSuccess = (data) => ({
  type: ACTION_TYPES.GET_SURVEY_BY_ID_SUCCESS,
  survey: data,
});

export const getSurveyById = (surveyId) => (dispatch) =>
  SurveyApi.getSurveyById(surveyId)
    .then(({ data }) => {
      dispatch(getSurveyByIdSuccess(data));
    })
    .catch((errors) => {
      return Promise.reject(errors);
    });

const getResultsSuccess = (data) => ({
  type: ACTION_TYPES.GET_RESULTS_SUCCESS,
  results: data,
});

export const getResults = (surveyId) => (dispatch) =>
  SurveyApi.getResults(surveyId)
    .then(({ data }) => {
      dispatch(getResultsSuccess(data));
    })
    .catch((errors) => {
      return Promise.reject(errors);
    });
