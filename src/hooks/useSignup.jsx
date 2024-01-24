import React from "react";

import { useAuthContext } from "./useAuthContext";

import {auth} from '../firebase/config';
import {createUserWithEmailAndPassword} from 'firebase/auth';

function useSignup() {
  const [error, setError] = React.useState(null);
  const {dispatch} = useAuthContext();
  
  const signup = (email, password) => {
    setError(null);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        dispatch({type: 'LOGIN', payload: res.user})
      })
      .catch((err) => {
        setError(err.message)
      });
  }
  
  return {error, signup}
}

export {useSignup};