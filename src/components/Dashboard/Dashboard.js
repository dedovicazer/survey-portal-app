import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ROUTES from '../../constants/routes';
import AccountApi from '../../apis/AccountApi';
import { logoutUser } from '../../utills/user';
import styles from './styles';

const Dashboard = ({ classes }) => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate(ROUTES.HOME);
  };

  const handleLogout = () => {
    AccountApi.logout().then((response) => {
      if (response.data.is_success) {
        logoutUser();
        navigate(ROUTES.LOGIN);
      }
    });
  };

  return (
    <Grid container>
      <Grid item className={classes.appBarContainer}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              onClick={goHome}
              variant="h6"
              component="div"
              className={classes.home}
              sx={{ flexGrow: 1 }}
            >
              Survey Portal
            </Typography>
            <Button
              color="inherit"
              className={classes.logout}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Grid>
      <Grid itam className={classes.dashboard}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Dashboard);
