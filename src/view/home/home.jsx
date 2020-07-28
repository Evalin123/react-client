import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import About from '../about/about';
import Contact from '../contact/contact';
import EditUser from '../editUser/editUser';

import Header from '../../components/header/header';

export default function Home() {
  return (
    <div className="Home">
      <Header />
      <Route path="/about" component={About}></Route>
      <Route path="/contact" component={Contact}></Route>
      <Route path="/edit" component={EditUser}></Route>
    </div>
  )
}


