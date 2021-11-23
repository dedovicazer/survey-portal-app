import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { getSurveyById, getResults } from '../../../reducers/survey/actions';
import SurveyOverviewContainer from './Overview/Container';
import SurveyResultsContainer from './Results/Container';
import styles from './styles';

const SurveyContainer = ({ classes }) => {
  const { state } = useLocation();

  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSurveyById(state.surveyId));
    dispatch(getResults(state.surveyId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currentSurvey = useSelector(
    (state) => state.surveyReducer.currentSurvey,
  );

  const currentResults = useSelector(
    (state) => state.surveyReducer.currentResults,
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="inherit"
        variant="fullWidth"
        className={classes.tabs}
      >
        <Tab label="Survey" />
        <Tab label="Results" />
      </Tabs>
      {value === 0 && currentSurvey && (
        <SurveyOverviewContainer currentSurvey={currentSurvey} />
      )}
      {value === 1 && currentSurvey && (
        <SurveyResultsContainer
          currentSurvey={currentSurvey}
          currentResults={currentResults}
        />
      )}
    </Grid>
  );
};

export default withStyles(styles)(SurveyContainer);
