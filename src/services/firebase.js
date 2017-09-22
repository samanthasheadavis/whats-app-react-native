import * as firebase from "firebase";

export const initialize = () => firebase.initializeApp({
  apiKey: "AIzaSyD8B6kex_RG60jcaAXlajEqKNL0ldCIKrE",
  authDomain: "whats-app-clone-1d269.firebaseapp.com",
  databaseURL: "https://whats-app-clone-1d269.firebaseio.com",
  projectId: "whats-app-clone-1d269",
  storageBucket: "whats-app-clone-1d269.appspot.com",
  messagingSenderId: "295394625696"
})


export const setListener = (endpoint, updaterFn) => {
    firebase.database().ref(endpoint).on('value', updaterFn);
    return () => firebase.database().ref(endpoint).off();
}
