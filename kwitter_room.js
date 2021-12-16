
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
  
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome!" + user_name;


function addRoom() {

      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({purpose: "Adding Room Name: "});
      localStorage.setItem("room_name", room_name);
      window.location= "kwitter_page.html";
      
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name-" + Room_names);
row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName'(this.id)> #"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;
      });});}
getData();

function logout() {

      
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location= "index.html";
}



