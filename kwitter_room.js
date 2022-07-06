const firebaseConfig = {
    apiKey: "AIzaSyB9VyjyK6SK4AvhJYLv8K5v8Dnl85WeGZ0",
    authDomain: "p-kwitter-app.firebaseapp.com",
    databaseURL: "https://p-kwitter-app-default-rtdb.firebaseio.com",
    projectId: "p-kwitter-app",
    storageBucket: "p-kwitter-app.appspot.com",
    messagingSenderId: "656719846186",
    appId: "1:656719846186:web:37901ea50ac9ab37631c53"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+user_name+"!";

function addRoom(){
    room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("room name-"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row 
    //End code
    });});}
getData();
function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html"
}