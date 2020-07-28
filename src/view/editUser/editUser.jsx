import React, { Component } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import EditIcon from '@material-ui/icons/Edit';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import axios from '../../utils/axios';

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        _id: "",
        name: "",
        email: "",
        description: "",
      }
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/users/current')
      .then(response => {
        this.setState({ user: response.data })
      })
  }

  editAccount(user) {
    axios.post('http://localhost:5000/api/users/edit/' + user._id, user)
    .then(response => {
      this.setState({user : response.data})
    })
  }

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="paper">
          <Avatar className="avatar">
            <EditIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Edit Account
          </Typography>
          <form className="form">
            <Grid container spacing={2}>
            <Grid container item xs={12} xm={12}>
                <TextField
                  name="id"
                  id="id"
                  autoComplete="id"
                  type="id"
                  variant="outlined"
                  label="ID"
                  value={this.state.user._id}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  disabled
                  required
                  fullWidth
                >
                </TextField>
              </Grid>
              <Grid container item xs={12} xm={12}>
                <TextField
                  onChange={event => {
                    let user = this.state.user;
                    user.name = event.target.value;
                    this.setState({ user: user });
                  }}
                  name="name"
                  id="name"
                  autoComplete="name"
                  type="name"
                  variant="outlined"
                  label="Name"
                  value={this.state.user.name}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  required
                  fullWidth
                >
                </TextField>
              </Grid>
              <Grid container item xs={12} xm={12}>
                <TextField
                  name="email"
                  id="email"
                  autoComplete="email"
                  type="email"
                  variant="outlined"
                  value={this.state.user.email}
                  label="Email"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  disabled
                  required
                  fullWidth
                >
                </TextField>
              </Grid>
              <Grid container item xs={12} xm={12}>
                <TextField
                  onChange={event => {
                    let user = this.state.user;
                    user.description = event.target.value;
                    this.setState({ user: user });
                  }}
                  name="description"
                  id="description"
                  autoComplete="description"
                  type="description"
                  variant="outlined"
                  label="Description"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={this.state.user.description}
                  fullWidth
                >
                </TextField>
              </Grid>
            </Grid>
            <Button
              onClick={() => { this.editAccount(this.state.user) }}
              color="primary"
              variant="contained"
              fullWidth
            >
              Submit
            </Button>
          </form>
        </div>
      </Container>
    )
  }
}

export default EditUser;