import firebase from 'firebase';

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyCfqZG9eYJIqHe8__jrgdTFA5qzynkI4h0",
    authDomain: "facebook-messenger-6b902.firebaseapp.com",
    databaseURL: "https://facebook-messenger-6b902.firebaseio.com",
    projectId: "facebook-messenger-6b902",
    storageBucket: "facebook-messenger-6b902.appspot.com",
    messagingSenderId: "628322731261",
    appId: "1:628322731261:web:49adb7473a16116f0cea94",
    measurementId: "G-P7Y8BH5LED"
});

const db = firebaseApp.firestore();

export default db;