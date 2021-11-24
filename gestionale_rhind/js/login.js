//import di firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js";

//config firebase
const firebaseConfig = {

  apiKey: "AIzaSyA4pHIJnNPrpa8t2epRg-aOS3Qdjbc4OUc",

  authDomain: "login--tesi.firebaseapp.com",

  projectId: "login--tesi",

  storageBucket: "login--tesi.appspot.com",

  messagingSenderId: "963205763990",

  appId: "1:963205763990:web:d7767f304e94134cd4c3b7",

  measurementId: "G-72H8Y257C2"

};



//initialize dell'applicazione di firebase
const app = initializeApp(firebaseConfig);
//initialize dell'autenticazione
const auth = getAuth(app);

//button for the login

let btn = document.getElementById("submit");

onAuthStateChanged(auth, (user) => {
  if (user) {
      
    var uid = user.uid;
    var users = document.getElementById("email");
      
  }
    
});

var pass = document.getElementById("psw");
var email = document.getElementById("email");

//use always only the enterkey
email.addEventListener("keyup", (e) => {

  if(e.keyCode === 13){

    e.preventDefault();

    document.getElementById("psw").focus();

  }

});

//login using the enter key
pass.addEventListener("keyup", (e) =>{

  if(e.keyCode === 13){

    e.preventDefault();

    var user = document.getElementById("email").value;
    var password = document.getElementById("psw").value;

    signInWithEmailAndPassword(auth, user, password)
    .then((userCredential) => {
    
    const user = userCredential.user;
    window.alert("Login in ");
    window.location = "/gestionale_rhind/html/anagrafe.html";

})
  
    .catch((error) => {

      const errorCode = error.code;
      const errorMessage = error.message;

      });

    }

});

btn.addEventListener("click", (e) => {

  //prevebt default behavior
  e.preventDefault();

var user = document.getElementById("email").value;
var password = document.getElementById("psw").value;

signInWithEmailAndPassword(auth, user, password)
  .then((userCredential) => {
  
  const user = userCredential.user;
  window.alert("Login in ");
  window.location = "/gestionale_rhind/html/anagrafe.html";

})

.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  });
});