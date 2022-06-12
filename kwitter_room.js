var firebaseConfig = {
      apiKey: "AIzaSyDihdQ54vKv_IYfcSAXZRs-bC925tWTJSw",
      authDomain: "kwitter-c9786.firebaseapp.com",
      databaseURL: "https://kwitter-c9786-default-rtdb.firebaseio.com",
      projectId: "kwitter-c9786",
      storageBucket: "kwitter-c9786.appspot.com",
      messagingSenderId: "855454354625",
      appId: "1:855454354625:web:19b17b48492f88153f1840",
      measurementId: "G-N1LH47T19C"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row

      //End cod
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}