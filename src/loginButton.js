import React from 'react';
import firebase from 'firebase/compat/app';

function LoginButton({setUser}) {

  // this is auth code for login
  function logIn() {
    var provider = new firebase.auth.GoogleAuthProvider(); 
   firebase.auth().signInWithPopup(provider).then(function(result) {
      console.log(result.user);
      setUser(result.user);
    }).catch(function(error) {
      console.log(error);
   });

  }
  //
  return (
    <button class ="login"onClick={() => logIn()}>
      Login
    </button>
          );
  }

export default LoginButton;