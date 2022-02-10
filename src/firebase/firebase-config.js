import firebase from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAWfSy0R_hi60pTxvssR7V69BcMiHEHbec",
  authDomain: "movie-app-react-28c15.firebaseapp.com",
  projectId: "movie-app-react-28c15",
  storageBucket: "movie-app-react-28c15.appspot.com",
  messagingSenderId: "810390146276",
  appId: "1:810390146276:web:fafe9d70795be25a3030f1"
};

firebase.initializeApp(firebaseConfig);

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    googleAuthProvider,
    firebase
}