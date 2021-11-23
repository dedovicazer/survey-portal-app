import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { getSurveys } from '../../reducers/survey/actions';
import CreateSurveyContainer from '../Survey/Create/Container';
import styles from './styles';
import Fab from '@material-ui/core/Fab';

const SurveyListContainer = ({ classes }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    dispatch(getSurveys());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const surveys = useSelector((state) => state.surveyReducer.surveys);

  const handleClick = (surveyId) => {
    navigate(`../survey/${surveyId}`, { state: { surveyId } });
  };

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <Grid container direction="column">
      <Grid item>
        <Grid container alignItems="center" className={classes.surveyHeader}>
          <Grid item>
            <Typography className={classes.surveyCounter}>
              My surveys: {surveys.length}
            </Typography>
          </Grid>
          <Grid item className={classes.openModal}>
            <Fab variant="extended" color="primary" onClick={handleOpenModal}>
              Add survey
            </Fab>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.surveyListContainer}>
        {surveys.map((survey) => (
          <Card className={classes.cardContainer}>
            <CardContent onClick={() => handleClick(survey.id)}>
              <Typography className={classes.cardTitle}>
                {survey.title}
              </Typography>
              <Typography className={classes.cardDescription}>
                {survey.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
      <CreateSurveyContainer
        open={isOpenModal}
        handleClose={() => handleCloseModal()}
      />
    </Grid>
  );
};

export default withStyles(styles)(SurveyListContainer);
