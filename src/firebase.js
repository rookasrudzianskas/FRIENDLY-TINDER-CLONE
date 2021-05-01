import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCAnsfF_JOO70n6QiM4m6Cxy8NADsCfiwQ",
    authDomain: "tinder-clone-da3e2.firebaseapp.com",
    projectId: "tinder-clone-da3e2",
    storageBucket: "tinder-clone-da3e2.appspot.com",
    messagingSenderId: "230338843475",
    appId: "1:230338843475:web:05241f3b2d653b4279c7a6",
    measurementId: "G-3YE7L64JGT"
});

const database = firebaseApp.firestore();

export default database;




















//
// import firebase from "firebase";
//
// // credentials to login to the database
// const firebaseConfig = {
//     apiKey: "AIzaSyCAnsfF_JOO70n6QiM4m6Cxy8NADsCfiwQ",
//     authDomain: "tinder-clone-da3e2.firebaseapp.com",
//     projectId: "tinder-clone-da3e2",
//     storageBucket: "tinder-clone-da3e2.appspot.com",
//     messagingSenderId: "230338843475",
//     appId: "1:230338843475:web:05241f3b2d653b4279c7a6",
//     measurementId: "G-3YE7L64JGT"
// };
//
// // we connect to the database with credentials from firebaseconfig
// const firebaseApp = firebase.initializeApp(firebaseConfig);
//
// // we access the real time database
// const database = firebaseApp.firestore();
//
//
// // export to use it in all the app, whatever you want to use!
// export default database;



