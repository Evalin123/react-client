import React, { Component } from 'react';
import clsx from 'clsx';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

import { UserItems, PostItems } from '../sidebar/sidebar';

const styles = (theme) => ({
  root: {
    height: "64px",
    flexGrow: "1",
  },

  title: {
    flexGrow: "1"
  },

  menuButton: {
    marginRight: "16px",
  },

  appBar: {
    width: "100%"
  },

  appBarShift: {
    marginLeft: "240px",
    width: `calc(100% - 240px)`,
  },

  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    height: "100vh",
    width: "240px",
  },

  drawerPaperClose: {
    overflowX: 'hidden',
  },
});


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  handleDrawerOpen() {
    this.setState({ open: true });
  };
  handleDrawerClose() {
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" className={clsx(classes.appBar, false && classes.appBarShift)}>
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              onClick={() => this.handleDrawerOpen()}
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6">
              Home
            </Typography>
            <IconButton color="inherit" component="a" href="http://localhost:3000/login">
              <AccountCircleIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          classes={{
            paper: clsx(classes.drawerPaper, true && classes.drawerPaperClose),
          }}
          variant="persistent"
          anchor="left"
          open={this.state.open}
          key='left'
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={() => this.handleDrawerClose()}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>{UserItems}</List>
          <Divider />
          <List>{PostItems}</List>
        </Drawer>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Header);