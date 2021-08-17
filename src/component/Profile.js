
import React, { Component } from 'react'
import { withAuth0 } from "@auth0/auth0-react";


class Profile extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        {
          this.props.auth0.isAuthenticated &&
          <div>
            <h1>{this.props.auth0.user.name}</h1>
            <h1>{this.props.auth0.user.email}</h1>
          </div>
        }

      </div>
    )
  }
}


export default withAuth0(Profile);

