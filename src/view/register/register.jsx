import React, { useState } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import './register.style.css';

import axios from '../../utils/axios';

const Register = (props) => {
  const [user, setUser] = useState({})

  const creatAccount = (user) => {
    axios.post("http://localhost:5000/api/users/register", user)
      .then(response => {
        console.log(response);
        props.history.push('/login')
      })
  }

  return (
    <Container maxWidth="xs" component={Card} className="root">
      <CssBaseline />
      <div className="paper">
        <Avatar className="avatar">
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
          </Typography>
        <form className="form">
          <Grid container spacing={2}>
            <Grid container item xs={12} xm={12}>
              <TextField
                onChange={(event) => {
                  const usr = user
                  usr.name = event.target.value;
                  setUser(usr);
                }}
                name="name"
                id="name"
                autoComplete="name"
                label="Name"
                type="name"
                variant="outlined"
                required
                fullWidth
              >
              </TextField>
            </Grid>
            <Grid container item xs={12} xm={12}>
              <TextField
                onChange={(event) => {
                  const usr = user
                  usr.email = event.target.value;
                  setUser(usr); 
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
                onChange={(event) => {
                  const usr = user
                  usr.password = event.target.value;
                  setUser(usr);
                }}
                name="password"
                id="password"
                autoComplete="password"
                label="Password"
                variant="outlined"
                type="password"
                required
                fullWidth
              >
              </TextField>
            </Grid>
            <Grid container item xs={12} xm={12}>
              <TextField
                onChange={(event) => {
                  const usr = user
                  usr.description = event.target.value;
                  setUser(usr); 
                }}
                name="description"
                id="description"
                autoComplete="description"
                label="Description"
                type="dexcription"
                variant="outlined"
                fullWidth
              >
              </TextField>
            </Grid>
          </Grid>
          <Button
            className="submit"
            onClick={() => { creatAccount(user) }}
            color="primary"
            variant="contained"
            fullWidth
          >
            Submit
            </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="http://localhost:3000/login" variant="body2">
                Already have an account? Sign in
                </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}


export default Register;