import React, { Component } from 'react';
import { makeStyles, withStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Table } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { TableRow } from '@material-ui/core';
import { Button } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableFooter from '@material-ui/core/TableFooter';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from "@material-ui/lab/TablePagination";
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

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

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, pageSize, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / pageSize) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / pageSize) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / pageSize) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

class PostList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postList: [],
      postsData: [],
      currentPost: null,
      currentIndex: -1,

      page: 1,
      count: 0,
      pageSize: 5,
    }
    this.pageSizes = [5, 10, 15];
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/posts")
      .then(response => {
        this.setState({ postList: response.data, postsData: response.data });
      })
  }

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

  handleChangePage = (event, newPage) => {
    this.setState({page: newPage})
  };

  handleChangePageSize = (event) => {
    this.setState({pageSize: parseInt(event.target.value, 10), page: 0})
  };

  render() {
    const { classes } = this.props;
    const { postList, pageSize, page} = this.state;
    
    return (
      <Paper className={classes.paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>序列</TableCell>
              <TableCell>Id</TableCell>
              <TableCell>Title</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(pageSize > 0
            ?postList.slice(page * pageSize, page * pageSize + pageSize)
            :postList
            ).map((post, index) => (
              <ListComponent
                key={index}
                index={index}
                id={post._id}
                title={post.title}
                content={post.content}
                editPost={() => { this.editPost(post._id) }}
                deletePost={() => { this.deletePost(post._id) }}
              >
              </ListComponent>
            ))}
          </TableBody>
          <TableFooter>
          <TableRow>
            <TablePagination
              pageSizeOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={postList.length}
              pageSize={pageSize}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onChangePage={() => {handleChangePage}}
              onChangePageSize={() => {handleChangePageSize}}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
        </Table>
      </Paper>
    )
    
  }
}

export default withStyles(styles, { withTheme: true })(PostList);