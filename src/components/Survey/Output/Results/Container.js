import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import { DataGrid } from '@material-ui/data-grid';
import { getColumns, getRows } from './utils';
import styles from '../styles';

const SurveyResultsContainer = ({ classes, currentSurvey, currentResults }) => {
  const questions = JSON.parse(currentSurvey.questions);
  const columns = getColumns(questions);
  const rows = getRows(currentResults);

  return (
    <Grid container className={classes.resultsContainer}>
      <DataGrid rows={rows} columns={columns} pageSize={12} />
    </Grid>
  );
};

export default withStyles(styles)(SurveyResultsContainer);
