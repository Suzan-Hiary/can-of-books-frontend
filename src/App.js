import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import MyFavoriteBooks from './MyFavoriteBooks';
import Profile from './component/Profile';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";

class App extends React.Component {

  render() {
    // console.log('app', this.props);

    return (

      <Router>

        <Header />
        <Switch>
          <Route exact path="/">
           
            {this.props.auth0.isAuthenticated? <MyFavoriteBooks/>:<Login/>}
            
          </Route>
          <Route exact path="/Profile">
            <Profile />
          </Route>


        </Switch>
        <Footer  />

      </Router>

    );
  }
}


export default withAuth0(App);
