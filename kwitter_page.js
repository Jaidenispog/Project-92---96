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

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");


    function send() {
          msg= document.getElementById("msg").value;
          firebase.database().ref(room_name).push({

          name : user_name,
          message : msg,
          like : 0

          });
          document.getElementById("msg").value = "";
          
    }




function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
         name = message_data['name'];
         message = message_data['message'];
         like = message_data['like'];
         name_with_tag="<h4>" + name + "<img src='tick.png' class='user_tick'></h4>";
         message_with_tag="<h4 class='message_h4'>"+ message + "<h4>";
         likes_button= "<button class='btn btn-warning' id = "+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
         span_with_tag= "<span class='glyphicon glyphicon-thumbs-up' > Like: " +like+ "</span> </button> <hr>";

         row = name_with_tag + message_with_tag + likes_button + span_with_tag;
          document.getElementById("output").innerHTML += row;



//End code
      } });  }); }
getData();

function updateLike(message_id) {

      console.log("Clicked On The Like Button Of: " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_Likes = Number(likes) + 1;
      console.log(updated_Likes);
      firebase.database().ref(room_name).child(message_id).update({
            like: updated_Likes
      });
}
function logout() {

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

      window.location("index.html");
}