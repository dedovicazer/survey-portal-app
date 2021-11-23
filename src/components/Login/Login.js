import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import LoginForm from './LoginForm';
import styles from './styles';

const Login = ({ classes }) => (
  <Grid
    container
    direction="column"
    wrap="nowrap"
    className={classes.container}
  >
    <Grid item className={classes.content}>
      <LoginForm />
    </Grid>
  </Grid>
);

export default withStyles(styles)(Login);
