import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDWI8ql4B_oGPXoVADjCe9zKx8h5-kFGXQ",
  authDomain: "twitterclone-d046e.firebaseapp.com",
  projectId: "twitterclone-d046e",
  storageBucket: "twitterclone-d046e.appspot.com",
  messagingSenderId: "223197083175",
  appId: "1:223197083175:web:7b6ec964c2af9286378002"
};

// init firebase
initializeApp(firebaseConfig);

// init firestore
const dataBase = getFirestore();

//init firebase auth
const auth = getAuth();

export { dataBase, auth };