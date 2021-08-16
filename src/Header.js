import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import LogButton from './component/LogButton';
import Button from './component/LoginButton' ;
import { withAuth0 } from '@auth0/auth0-react';
import './Header.css';

class Header extends React.Component {
  render() {
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        {this.props.auth0.isAuthenticated?<LogButton/>:<Button/>}
      </Navbar>
    );
  }
}

export default withAuth0(Header);
