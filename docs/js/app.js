$(document).ready(function () {
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyBWennaUU9AmpJu2wWoAbhicul6hlORgP0",
        authDomain: "word-count-c52c8.firebaseapp.com",
        databaseURL: "https://word-count-c52c8.firebaseio.com",
        projectId: "word-count-c52c8",
        storageBucket: "word-count-c52c8.appspot.com",
        messagingSenderId: "116342543837",
        appId: "1:116342543837:web:4f45845846185d67"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    var db = firebase.firestore();

    db.collection("users").add({
        first: "Ada",
        last: "Lovelace",
        born: 1815
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}); // end ready