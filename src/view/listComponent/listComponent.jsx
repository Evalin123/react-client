import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { TableCell, TableRow } from '@material-ui/core';
import { Button } from '@material-ui/core';

import axios from '../../utils/axios';

const styles = (theme) => ({
  submit: {
    margin: theme.spacing(0, 1),
  }
})

class ListComponent extends Component {

  editPost(postId) {
    axios.get("http://localhost:5000/api/posts/" + postId)
      .then(response => {
        this.props.history.push('/editpost/' + response.data._id);
      })
  }

  deletePost(postId) {
    axios.delete("http://localhost:5000/api/posts/delete/" + postId)
      .then(response => {
        console.log(response);
      })
  }

  render() {
    const { classes } = this.props;

    return (
      <TableRow key={this.props.key} hover>
        <TableCell>{this.props.index}</TableCell>
        <TableCell>{this.props.id}</TableCell>
        <TableCell>{this.props.title}</TableCell>
        <TableCell>
          <Button
            onClick={() => { this.editPost(this.props.id) }}
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            編輯
          </Button>
          <Button
            onClick={() => { this.deletePost(this.props.id) }}
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            刪除
          </Button>
        </TableCell>
      </TableRow>
    )
  }
}

export default withStyles(styles, { withTheme: true })(ListComponent);