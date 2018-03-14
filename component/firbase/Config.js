import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDqCbmMPFt-40JUyC1rukW4KMKTm_J489E",
    authDomain: "noters-9ce69.firebaseapp.com",
    databaseURL: "https://noters-9ce69.firebaseio.com",
    projectId: "noters-9ce69",
    storageBucket: "noters-9ce69.appspot.com",
    messagingSenderId: "649291148423"
};

export const Firebase = firebase.initializeApp(config, "NoteRS");