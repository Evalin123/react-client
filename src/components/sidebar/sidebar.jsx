import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  paper: {
    height: '100vh',
    width: '240px'
  }
});

class SignIn extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.paper}>
        <CssBaseline />
        <Drawer
          variant="temporary"
          anchor="left"
        >
          123
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(SignIn);