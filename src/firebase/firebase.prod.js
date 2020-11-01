import Firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
// import {seedDatabase} from '../seed';

//database
//config


const config = {
    apiKey: "AIzaSyC-3DD5nxwb3BUnicJwQ2K-wixBtXdAunY",
    authDomain: "netflix-clone-5b406.firebaseapp.com",
    databaseURL: "https://netflix-clone-5b406.firebaseio.com",
    projectId: "netflix-clone-5b406",
    storageBucket: "netflix-clone-5b406.appspot.com",
    messagingSenderId: "488538600896",
    appId: "1:488538600896:web:4b0948aeb5153e98090425"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export {firebase};