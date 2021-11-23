import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import withStyles from '@material-ui/core/styles/withStyles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import SurveyCreateForm from './Form';
import { addSurvey } from '../../../reducers/survey/actions';
import { prepareRequest } from './utils';
import styles from './styles';

const CreateSurveyContainer = ({ classes, open, handleClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    const request = prepareRequest(values);
    dispatch(addSurvey(request)).then((response) => {
      handleClose();
      navigate(`../survey/${response.id}`, {
        state: { surveyId: response.id },
      });
    });
  };

  return (
    <Dialog open={open} onClose={handleClose} classes={{ paper: classes.root }}>
      <DialogTitle>Create new survey</DialogTitle>
      <DialogContent>
        <SurveyCreateForm onSubmit={handleSubmit} />
      </DialogContent>
    </Dialog>
  );
};

export default withStyles(styles)(CreateSurveyContainer);
