import React, { Component } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Grid, TextField, Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Card from '@material-ui/core/Card';

import axios from '../../utils/axios';

const styles = (theme) => ({
  root: {
    height: "100vh"
  },
  
  avatar: {
    margin: "8px",
  },
  submit: {
    marginTop: "24px",
    marginBottom: "16px",
  }
})

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        title: "",
        content: "",
      }
    }
  }

  addPost(post) {
    axios.post("http://localhost:5000/api/posts/create", post)
    .then(response => {
      console.log(response);
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <Container maxWidth="xs" component={Card} className={classes.root}>
        <CssBaseline />
        <div className="paper">
          <Avatar className={classes.avatar}>
            <AddBoxIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add Post
          </Typography>
          <form className="form">
            <Grid container spacing={2}>
              <Grid container item xs={12} xm={12}>
                <TextField
                  onChange={event => {
                    let post = this.state.post;
                    post.title = event.target.value;
                    this.setState({ post: post });
                  }}
                  name="title"
                  id="title"
                  autoComplete="title"
                  label="Title"
                  type="title"
                  required
                  fullWidth
                >
                </TextField>
              </Grid>
              <Grid container item xs={12} xm={12}>
                <TextField
                  onChange={event => {
                    let post = this.state.post;
                    post.content = event.target.value;
                    this.setState({ post: post });
                  }}
                  name="content"
                  id="content"
                  autoComplete="content"
                  label="Content"
                  type="content"
                  variant="outlined"
                  multiline
                  rows={6}
                  required
                  fullWidth
                >
                </TextField>
              </Grid>
            </Grid>
            <Button
              className={classes.submit}
              onClick={() => { this.addPost(this.state.post) }}
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

export default withStyles(styles, { withTheme: true })(AddPost);