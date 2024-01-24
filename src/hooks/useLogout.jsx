import { useAuthContext } from './useAuthContext';

import {auth} from '../firebase/config';
import {signOut} from 'firebase/auth';

function useLogout() {
  const {dispatch} = useAuthContext();

  const logout = async () => {
    signOut(auth)
    .then(() => {
      dispatch({type: 'LOGOUT'})
    })
    .catch((err) => {
      console.log(err.message);
    })
  }

  return {logout}
}

export {useLogout};