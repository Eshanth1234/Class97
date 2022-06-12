
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

function addUser(){
    user_name= document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}