import React from 'react';
import { Formik, FieldArray, getIn } from 'formik';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import RemoveIcon from '@material-ui/icons/RemoveCircleOutline';
import MenuItem from '@material-ui/core/MenuItem';
import Fab from '@material-ui/core/Fab';
import {
  QUESTION_TYPES_LIST,
  EMPTY_QUESTION,
  QUESTIONS_TYPE,
} from '../../../constants/survey';
import { getInitialValues } from './utils';
import styles from './styles';

const SurveyCreateForm = ({ classes, onSubmit }) => {
  const handleAddNewQuestion = (push) => {
    push(EMPTY_QUESTION);
  };

  const handleDelete = (remove, index) => {
    remove(index);
  };

  return (
    <Grid item>
      <Formik initialValues={getInitialValues()} onSubmit={() => {}}>
        {({ values, handleChange, touched, errors }) => (
          <form noValidate autoComplete="off">
            <Grid container className={classes.formContainer}>
              <Grid item className={classes.formItem}>
                <TextField
                  fullWidth
                  id="title"
                  name="title"
                  label="Title"
                  value={values.title}
                  variant="outlined"
                  onChange={handleChange}
                  error={touched.title && Boolean(errors.title)}
                  className={classes.inputContainer}
                />
              </Grid>
              <Grid item className={classes.formItem}>
                <TextField
                  fullWidth
                  id="description"
                  name="description"
                  label="Description"
                  value={values.description}
                  variant="outlined"
                  onChange={handleChange}
                  error={touched.description && Boolean(errors.description)}
                  className={classes.inputContainer}
                  multiline
                  rows={2}
                  maxRows={4}
                />
              </Grid>
              <Grid item className={classes.formItem}>
                <Typography>Questions:</Typography>
              </Grid>
              <FieldArray name="questions">
                {({ push, remove }) => (
                  <Grid item>
                    {values.questions.map((question, index) => (
                      <Grid container key={index}>
                        <Grid item className={classes.formItem}>
                          <TextField
                            fullWidth
                            id={`type-${index}`}
                            name={`questions[${index}].type`}
                            label="Question type"
                            value={question.type}
                            variant="outlined"
                            onChange={handleChange}
                            error={getIn(errors, `questions[${index}].type}`)}
                            className={classes.inputContainerDropdown}
                            select={true}
                          >
                            {QUESTION_TYPES_LIST.map((item) => (
                              <MenuItem key={item.key} value={item.value}>
                                {item.key}
                              </MenuItem>
                            ))}
                          </TextField>
                          <RemoveIcon
                            className={classes.removeIcon}
                            onClick={() => handleDelete(remove, index)}
                          />
                        </Grid>
                        <Grid item className={classes.formItem}>
                          <TextField
                            fullWidth
                            id={`questionText-${index}`}
                            name={`questions[${index}].questionText`}
                            label="Question text"
                            value={question.questionText}
                            variant="outlined"
                            onChange={handleChange}
                            error={getIn(
                              errors,
                              `questions[${index}].questionText}`,
                            )}
                            className={classes.inputContainer}
                          />
                        </Grid>
                        {question.type === QUESTIONS_TYPE.SELECT && (
                          <Grid item className={classes.formItem}>
                            <TextField
                              fullWidth
                              id={`options-${index}`}
                              name={`questions[${index}].options`}
                              label="Options"
                              value={question.options}
                              variant="outlined"
                              onChange={handleChange}
                              error={getIn(
                                errors,
                                `questions[${index}].options}`,
                              )}
                              className={classes.inputContainer}
                            />
                          </Grid>
                        )}
                      </Grid>
                    ))}
                    <Typography
                      className={classes.addNewQuestion}
                      onClick={() => handleAddNewQuestion(push)}
                    >
                      Add new question
                    </Typography>
                  </Grid>
                )}
              </FieldArray>
            </Grid>
            <Grid container item>
              <Fab
                variant="extended"
                color="primary"
                className={classes.submitButton}
                onClick={() => onSubmit(values)}
              >
                Create survey
              </Fab>
            </Grid>
          </form>
        )}
      </Formik>
    </Grid>
  );
};

export default withStyles(styles)(SurveyCreateForm);
