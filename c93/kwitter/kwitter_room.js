
//ADD YOUR FIREBASE LINKS HERE

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
  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;


      //End code
      });});}
getData();

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "+ user_name+"!";


function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location ="kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}
