import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated } = withAuth0();

  

  return (
    isAuthenticated && (
      <div>
         
        <h2>WELCOME {user.name}</h2>
        
      </div>
    )
  );
};

export default withAuth0(Profile);
