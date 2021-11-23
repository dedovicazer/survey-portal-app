import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Question from './Question';
import styles from '../styles';

const SurveyOverviewContainer = ({ classes, currentSurvey }) => {
  const questions = JSON.parse(currentSurvey.questions);

  const configuration = {
    surveyId: currentSurvey.id,
    questions,
  };

  return (
    <Grid container>
      <Grid item className={classes.item}>
        <Grid
          container
          direction="column"
          className={classes.overviewContainer}
        >
          <Grid item>
            <Typography className={classes.title}>
              Title: {currentSurvey.title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography>Description: {currentSurvey.description}</Typography>
          </Grid>
          <Grid item className={classes.questionsItem}>
            <Typography clssName={classes.questionsLabel}>
              Questions:
            </Typography>
          </Grid>
          {questions.map((question, index) => (
            <Question
              key={question.questionId}
              question={question}
              questionIndex={index}
            />
          ))}
        </Grid>
      </Grid>
      <Grid item className={classes.item}>
        <Grid
          container
          direction="column"
          className={classes.configurationContainer}
        >
          <Grid item>
            <Typography className={classes.text}>
              Use this configuration in Survey Library:
            </Typography>
          </Grid>
          <Grid item className={classes.code}>
            <code>{JSON.stringify(configuration)}</code>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(SurveyOverviewContainer);
