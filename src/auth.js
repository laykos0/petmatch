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