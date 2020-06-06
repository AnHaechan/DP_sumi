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


function mySignUp(){
    const name = document.getElementById("SignUpName").value;
    const email = document.getElementById("SignUpEmail").value;
    const password = document.getElementById("SignUpPassword").value;
    const confirm = document.getElementById("SignUpConfirm").value;

    if(0!=password.localeCompare(confirm)){
        alert("Password is not same!");
    }else{
        firebase.auth().createUserWithEmailAndPassword(email, password).then(()=>{
            firebase.auth().currentUser.updateProfile({
              displayName: name
            })
            firebase.database().ref('users/'+firebase.auth().currentUser.uid).set({
              like: ["AAA"],
              dislike: [],
              interested: []
            })
            console.log(firebase.auth().currentUser);
            location.href="MainPage-Logged.html";
        })
    }

}