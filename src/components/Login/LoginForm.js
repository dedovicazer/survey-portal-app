import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Fab from '@material-ui/core/Fab';
import { setCurrentUser, getCurrentUser } from '../../utills/user';
import AccountApi from '../../apis/AccountApi';
import styles from './styles';

const LoginForm = ({ classes }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const user = getCurrentUser();

    if (user) {
      navigate('/');
    }
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'email') {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  const handleSubmit = () => {
    AccountApi.login({ email, password }).then((response) => {
      if (response.data.is_success) {
        setCurrentUser(response.data.data);
        navigate('/');
      }
    });
  };

  const isDisabledButton = email.trim() === '' || password.trim() === '';

  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      className={classes.loginFormContainer}
    >
      <form>
        <Grid item>
          <Typography className={classes.appName}>Survey Portal</Typography>
        </Grid>
        <Grid item className={classes.fieldItem}>
          <InputBase
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            variant="outlined"
            placeholder="Email"
            className={classes.field}
          />
        </Grid>
        <Grid item className={classes.fieldItem}>
          <InputBase
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            variant="outlined"
            placeholder="Password"
            className={classes.field}
            type="password"
          />
        </Grid>
        <Grid item>
          <Fab
            variant="extended"
            color="primary"
            className={classes.submitButton}
            onClick={handleSubmit}
            disabled={isDisabledButton}
          >
            Login
          </Fab>
        </Grid>
      </form>
    </Grid>
  );
};

export default withStyles(styles)(LoginForm);
