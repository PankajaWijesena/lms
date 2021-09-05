import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
    apiKey: "AIzaSyAFTA1AUxOG5ukRv2oQsc4t4TTf_-qKY88",
    authDomain: "nsbm-spm-plw-lms.firebaseapp.com",
    projectId: "nsbm-spm-plw-lms",
    storageBucket: "nsbm-spm-plw-lms.appspot.com",
    messagingSenderId: "206652651828",
    appId: "1:206652651828:web:9d6940505da75c6a014d61"
});

const firestore = firebase.firestore();

export default firestore;
