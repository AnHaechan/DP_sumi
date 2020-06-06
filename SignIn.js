  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCrtTewJF_Zp1A5UHjzYO5S-1ohVxV7U68",
    authDomain: "dp4-test.firebaseapp.com",
    databaseURL: "https://dp4-test.firebaseio.com",
    projectId: "dp4-test",
    storageBucket: "dp4-test.appspot.com",
    messagingSenderId: "343541650289",
    appId: "1:343541650289:web:6910846b2cd28d773c9cd0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();


function myClickButton(){
  const email = document.getElementById("SignInEmail").value;
  const password = document.getElementById("SignInPassword").value;
  if(event.keyCode==13 && email!=""&& password!="") {mySignIn(); return false;}
  else if(event.keyCode==13){
    alert("Fill in all items!");
  }
}


function mySignIn(){
    const email = document.getElementById("SignInEmail").value;
    const password = document.getElementById("SignInPassword").value;
    
    auth.signInWithEmailAndPassword(email, password).then(()=>{
      location.href="MainPage-Logged.html";
    }).catch(function(error){
      alert(error.message);
    })
}