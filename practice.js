
//ADD YOUR FIREBASE LINKS

const firebaseConfig = {
    apiKey: "AIzaSyAB0ujQqquHn1cN7EqaZ7oNlm91Dk3Y9WU",
    authDomain: "kwitter-76de3.firebaseapp.com",
    databaseURL: "https://kwitter-76de3-default-rtdb.firebaseio.com",
    projectId: "kwitter-76de3",
    storageBucket: "kwitter-76de3.appspot.com",
    messagingSenderId: "252579169893",
    appId: "1:252579169893:web:4e3cbccf5d1d1b6f6ea88c",
    measurementId: "G-CVW2HYL3NY"
  };
  

  firebase.initializeApp(firebaseConfig);


  function addUser() {

    user_name= document.getElementById("username").value;
    firebase.database().ref("/").child(user_n ame).update({
        purpose:"Adding User..."
    });

  }