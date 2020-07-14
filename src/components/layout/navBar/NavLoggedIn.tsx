import { AuthContext } from 'contexts/auth';
import { Link } from 'gatsby';
import React, { useContext } from 'react';
import { FlexDiv, NavLink } from 'styles';

// The navbar part that shown if you are logged in
export default function LoggedIn() {

  const { logOut, authToken } = useContext(AuthContext);
  const { token } = authToken;

  return (
    <FlexDiv>
      <Link to="/app/profile">
        <NavLink>
          Profile
        </NavLink>
      </Link>
      <NavLink onClick={() => logOut(
        {
          tokenToRevoke: token,
          logOutUser   : true,
        }
      )}
      >
        Logout
      </NavLink>
    </FlexDiv>
  );

}
