import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'styles/links';
import AuthModal from './authModal/AuthModal';

const Div = styled.div`
  display: flex;
`;

// The navbar shown if you are logged out
const LoggedOut: FC = () => {

  const actions = {
    LOGIN         : 'login',
    SIGNUP        : 'signup',
    PASSWORD_RESET: 'passwordReset'
  } as AuthActions;

  const [ userAuthAction, setUserAuthAction ] = useState<UserAuthAction>({
    authModalOpen: false, authAction: actions.LOGIN
  });

  return (
    <Div>

      <NavLink onClick={() => setUserAuthAction({
        authAction: actions.SIGNUP, authModalOpen: true
      })}
      >
        Register
      </NavLink>
      <AuthModal
        setAuthAction={setUserAuthAction}
        userAuthAction={userAuthAction}
        actions={actions}
      />
      <NavLink
        onClick={() => setUserAuthAction({
          authAction: actions.LOGIN, authModalOpen: true
        })}
      >
        Login
      </NavLink>
    </Div>
  );

};

export default LoggedOut;
