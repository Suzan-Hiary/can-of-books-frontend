import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import Login from './Login';
import BestBooks from './BestBooks'; 
import Profile from './component/profile'; 
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";

class App extends React.Component {

  render() {
    console.log('app', this.props);

    return (
     
      <Router>
        <IsLoadingAndError>
          <Header />
          <Switch>
            <Route exact path="/">
        
      {this.props.auth0.isAuthenticated?<BestBooks/>:<Login/>}
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>

            
          </Switch>
          <Footer style={{paddingtop:"100px"}}/>
        </IsLoadingAndError>
      </Router>

    );
  }
}


export default withAuth0(App);
