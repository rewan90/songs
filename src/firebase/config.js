import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
firebase.initializeApp({
    apiKey: "AIzaSyDLHC3dAiNu8RcyfbQpMQ0dcsg808hbmt8",
    authDomain: "pro-2-72ab3.firebaseapp.com",
    projectId: "pro-2-72ab3",
    storageBucket: "pro-2-72ab3.appspot.com",
    messagingSenderId: "259550557635",
    appId: "1:259550557635:web:39c205bbedd548d0183976",
    measurementId: "G-E3S8ZNH0G7"
})
// init firebase services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectstorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {
    projectFirestore,
    projectAuth,
    timestamp,
    projectstorage

}
