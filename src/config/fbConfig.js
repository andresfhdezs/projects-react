import firebase/*, { firestore }*/ from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

var config = {
    apiKey: "AIzaSyDVVRcoxo8EAYO0wxi9JpKoWzqF-cOjP3s",
    authDomain: "aplusexpress-676f4.firebaseapp.com",
    databaseURL: "https://aplusexpress-676f4.firebaseio.com",
    projectId: "aplusexpress-676f4",
    storageBucket: "aplusexpress-676f4.appspot.com",
    messagingSenderId: "338440469575",
    appId: "1:338440469575:web:8a8d48924813c0f9528562",
    measurementId: "G-HD0SBZ4P3Q"
}

firebase.initializeApp(config);
firebase.firestore();

export default firebase;