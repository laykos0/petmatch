// TODO: MOVE CODE RESPONSIBLE FOR AUTHENTIFICATION
import {signInWithPopup, onAuthStateChanged, signOut} from "firebase/auth";

import {auth, provider} from "./main.jsx"

function signInOrOut(){
    auth.currentUser? signOut(auth) : signInWithPopup(auth, provider)
}

onAuthStateChanged(auth, loginOrOutACB);


function loginOrOutACB(user){
    console.log("loginOrOutACB")
}


// TODO const authPresenter = {
//     handleAuthButtonClick: (authProvider) => {
//       userModel.getCurrentUser()
//         ? userModel.signOut()
//         : userModel.signIn(authProvider);
//     },
//   };
/* User model */
// TODO const userModel = {
//     signIn: (provider) => signInWithPopup(auth, provider),
//     signOut: () => signOut(auth),
//     onAuthStateChanged: (callback) => onAuthStateChanged(auth, callback),
//     getCurrentUser: () => auth.currentUser,
//   };