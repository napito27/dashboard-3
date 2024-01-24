import React from 'react';

import { AuthContext } from '../context/auth-context';

export const useAuthContext = () => {
  const context = React.useContext(AuthContext);

  if (!context) {
    throw Error('useAuthContext must be inside an AuthContextProvider')
  }

  return context
}