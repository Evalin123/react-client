import React, { Component, useState } from 'react';
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
import HomeIcon from '@material-ui/icons/Home';
import { Button } from '@material-ui/core';

const styles = (theme) => ({
  root: {
    height: "70px",
    flexGrow: "1",
  },

  title: {
    flexGrow: "1"
  },

  menuButton: {
    marginRight: "16px",
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
    this.setState({open: true});
  };
  handleDrawerClose() {
    this.setState({open: false});
  };
  render() {
    const { classes } = this.props;
    
    return (
      <div className={classes.root}>
        <AppBar position="static">
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
            <IconButton color="inherit">
              <AccountCircleIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          title="Menu"
          closable={false}
          open={this.state.open}
          key='left'
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={() => this.handleDrawerClose()}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="home"
          >
            <HomeIcon />
            Home
          </IconButton>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="about"
          >
            <HomeIcon />
            About
          </IconButton>
        </Drawer>
      </div>
    )
  }
}


export default withStyles(styles, { withTheme: true })(Header);