import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import axios from '../../utils/axios';

import About from '../about/about';
import Contact from '../contact/contact';
import EditUser from '../editUser/editUser';
import Register from '../register/register';
import Login from '../login/login';
import AddPost from '../addPost/addPost';
import PostList from '../postList/postList';
import EditPost from '../editPost/editPost';

import Header from '../../components/header/header';

export default function Home() {
  return (
    <div className="Home">
      <Header />
      <Route path="/register" component={Register}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/contact" component={Contact}></Route>
      <Route path="/edit" component={EditUser}></Route>
      <Route path="/addpost" component={AddPost}></Route>
      <Route path="/postlist" component={PostList}></Route>
      <Route path="/editpost/:id" component={EditPost}></Route>
    </div>
  )
}


