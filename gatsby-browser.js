import AuthContextProvider from 'contexts/auth';
import React from 'react';
import { configureUserDataStore, configureUserStore } from 'store';

// Configure stores
configureUserStore();
configureUserDataStore();

// Wrap the app in the AuthContext
export const wrapRootElement = ({ element }) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <AuthContextProvider>
    {element}
  </AuthContextProvider>
);
