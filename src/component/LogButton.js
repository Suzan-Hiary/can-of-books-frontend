import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function logButton() {
  const {
    isAuthenticated,
    logout,
  } = useAuth0();

  return isAuthenticated && (
    <button onClick={() => {
      logout({ returnTo: "http://localhost:3000" });
    }}>Log out</button>
  );
}
export default logButton;