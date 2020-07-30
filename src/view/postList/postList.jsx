import React, { Component } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Grid, Table } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { TableRow } from '@material-ui/core';
import { Button } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableContainer from '@material-ui/core/TableContainer';

import axios from '../../utils/axios';
import ListComponent from '../listComponent/listComponent';

const styles = (theme) => ({
  paper: {
    height: "100vh",
  },

  table: {
    height: "100vh",
    width: `calc(100% - 480px)`,
    marginLeft: "240px"
  },

  submit: {
    margin: theme.spacing(0, 1),
  }
})

class PostList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postList: [],
    }
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/posts")
      .then(response => {
        this.setState({ postList: response.data });
      })
  }

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableCell>序列</TableCell>
            <TableCell>Id</TableCell>
            <TableCell>Title</TableCell>
          </TableHead>
          <TableBody>
            {this.state.postList.map((post, index) => (
              <ListComponent 
                key={index} 
                index={index} 
                id={post._id} 
                title={post.title} 
                content={post.content}
              >
              </ListComponent>
            ))}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default withStyles(styles, { withTheme: true })(PostList);