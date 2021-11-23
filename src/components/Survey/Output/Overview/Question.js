import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { QUESTIONS_TYPE } from '../../../../constants/survey';
import styles from '../styles';

const Question = ({ classes, question, questionIndex }) => (
  <Grid container direction="column" className={classes.questionContainer}>
    <Grid item>
      <Typography className={classes.text}>
        {questionIndex + 1}. {question.questionText}
      </Typography>
    </Grid>
    {question.type === QUESTIONS_TYPE.SELECT && question.options.length && (
      <Grid item>
        <Typography className={classes.labelOptions}>Options:</Typography>
        <List>
          {question.options.map((option, index) => (
            <ListItem className={classes.text}>
              {index + 1}. {option.key}
            </ListItem>
          ))}
        </List>
      </Grid>
    )}
  </Grid>
);

export default withStyles(styles)(Question);
