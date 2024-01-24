import React from "react";

import {useAuthContext} from '../hooks/useAuthContext';

import {auth} from '../firebase/config';
import {signInWithEmailAndPassword} from 'firebase/auth';

function useSignin() {
  const [error, setError] = React.useState(null);
  const {dispatch} = useAuthContext();
  
  const login = (email, password) => {
    setError(null);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        dispatch({type: 'LOGIN', payload: res.user})
      })
      .catch((err) => {
        setError(err.message)
      });
  }
  
  return {error, login}
}

export {useSignin}