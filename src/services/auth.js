import { 
    getAuth, 
    signOut, 
    signInWithEmailAndPassword, 
    signInWithPopup,
    onAuthStateChanged, 
    createUserWithEmailAndPassword, 
    GoogleAuthProvider,
    setPersistence,
    browserSessionPersistence
} from 'firebase/auth';  

import {app} from "./firebase"

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
setPersistence(auth, browserSessionPersistence)

export default {
    async signInEmailPassword(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    },

    async signInGoogle() {
        return signInWithPopup(auth, provider)
    },

    async signUpEmailPassword(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    },

    async signOut() {
        return signOut(auth)
    },

    async onAuthStateChanged(callback) {
        return onAuthStateChanged(auth, callback)
    },

    async getCurrentUser(){
        return auth.currentUser
    },
}
