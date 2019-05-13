[comment]: MENU

[comment]: JS (not show in Page)
<hr>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
<script src="js/app.js"></script>

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/6.0.2/firebase-app.js"></script>
<!-- storage -->
<script src="https://www.gstatic.com/firebasejs/6.0.2/firebase-firestore.js"></script>
<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#config-web-app -->

<script>
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
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
</script>

