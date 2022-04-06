
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
  apiKey: "AIzaSyDOllZkgeIJL51erJHiG2pF0Vq-B3asbpM",
  authDomain: "kwitter-f55a0.firebaseapp.com",
  databaseURL: "https://kwitter-f55a0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kwitter-f55a0",
  storageBucket: "kwitter-f55a0.appspot.com",
  messagingSenderId: "1085962628542",
  appId: "1:1085962628542:web:2e501faeee453755829def",
  measurementId: "G-HS0NDT0CKE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementsById("user_name").innerHTML = "welcome" + user_name + "!";


function addRoom()
{
  room_name = document.getElementsById("room_name").value;

firebase.database().ref("/").child(room_name).update({
   purpose: "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}
 
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
 { childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
    console.log("room name-" + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
    document.getElementById("output").innerHTML += row;
    
      //End code
      });
    });
  }
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html"
}
function logout() 
{
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
       window.location = "index.html";
}