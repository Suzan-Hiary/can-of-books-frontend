import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import  LoginButton from './component/LoginButton';
import './Login.css';
// import { Button } from 'react-bootstrap';

class Login extends React.Component {
  render() {
    return (
      <Card style={{ width: "200px " ,height:"200px" , color:"blue" , background:"#B4B897"}}>
        <Card.Body>
          <Card.Title>Log In</Card.Title>
          <Card.Text>
            Click Below to Log In
          </Card.Text>

          <LoginButton />
        </Card.Body>
      </Card>
    )
  }
}

export default Login;
