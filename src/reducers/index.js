import { combineReducers } from 'redux';

import surveyReducer from './survey/reducer';

const root = combineReducers({
  surveyReducer,
});

export default root;
