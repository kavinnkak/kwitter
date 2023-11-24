
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAFbajnHEN_i3zMh_PFvLFvwkWTpmE8QWA",
    authDomain: "kwitter-88d42.firebaseapp.com",
    databaseURL: "https://kwitter-88d42-default-rtdb.firebaseio.com",
    projectId: "kwitter-88d42",
    storageBucket: "kwitter-88d42.appspot.com",
    messagingSenderId: "553838244127",
    appId: "1:553838244127:web:bff54dcf6cac21df08002a"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "add user"
    });
  }