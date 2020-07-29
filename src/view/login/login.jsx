import React, { Component } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import './login.style.css';

import axios from '../../utils/axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: "",
        password: "",
      }
    }
  }

  logIn(user) {
    axios.post("http://localhost:5000/api/users/login", user)
      .then((response) => {
        console.log(response);
        localStorage.setItem("jwtToken", response.data.token);
        this.props.history.push('/edit')
      })
  }

  render() {
    return (
      <Grid container component="main" className="root">
        <CssBaseline />
        <Grid item sm={4} md={8} className="image"></Grid>
        <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} variant="outlined" square>
          <div className="paper">
            <Avatar className="avatar">
              <AccountCircleIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className="form">
              <Grid container spacing={2}>
                <Grid container item xs={12} xm={12}>
                  <TextField
                    onChange={event => {
                      let user = this.state.user;
                      user.email = event.target.value;
                      this.setState({ user: user });
                    }}
                    name="email"
                    id="email"
                    autoComplete="email"
                    label="Email"
                    type="email"
                    variant="outlined"
                    required
                    fullWidth
                  >
                  </TextField>
                </Grid>
                <Grid container item xs={12} xm={12}>
                  <TextField
                    onChange={event => {
                      let user = this.state.user;
                      user.password = event.target.value;
                      this.setState({ user: user });
                    }}
                    name="password"
                    id="password"
                    autoComplete="password"
                    label="Password"
                    type="password"
                    variant="outlined"
                    required
                    fullWidth
                  >
                  </TextField>
                </Grid>
              </Grid>
              <Button
                className="submit"
                onClick={() => { this.logIn(this.state.user) }}
                color="primary"
                variant="contained"
                fullWidth
              >
                Submit
              </Button>
              <Grid container justify="flex-end">
              <Grid item>
                <Link href="http://localhost:3000/register" variant="body2">
                  Create Account
                </Link>
              </Grid>
            </Grid>
            </form>
          </div>
        </Grid>

      </Grid>
    )
  }
}

export default Login;