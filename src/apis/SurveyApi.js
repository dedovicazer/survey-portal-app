import requestTypes from '../constants/requestTypes';
import { fetchNext } from '../utills/request';
import { getCurrentUser } from '../utills/user';

export default class SurveyApi {
  static getAllSurveys = () => {
    const currentUser = getCurrentUser();

    return fetchNext(requestTypes.GET, `users/${currentUser.id}/surveys/`);
  };

  static addNewSurvey = (bodyData) => {
    const currentUser = getCurrentUser();

    return fetchNext(
      requestTypes.POST,
      `users/${currentUser.id}/surveys/`,
      bodyData,
    );
  };

  static getSurveyById = (surveyId) =>
    fetchNext(requestTypes.GET, `surveys/${surveyId}/`);

  static getResults = (surveyId) =>
    fetchNext(requestTypes.GET, `surveys/${surveyId}/results`);
}
