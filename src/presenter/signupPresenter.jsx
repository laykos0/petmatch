import auth from "../services/auth.js"
import SignupView from "../view/signupView.jsx";

export default
function Signup(){

    function onSignInEmailACB(email, password) {
        auth.signInEmailPassword(email, password)
    }

    function onSignInGoogleACB() {
        auth.signInGoogle()
    }

    function onSignUpEmailACB(email, password) {
        auth.signUpEmailPassword(email, password)
    }

    return (<div>
                <SignupView 
                    onSignInEmail={onSignInEmailACB}
                    onSignInGoogle={onSignInGoogleACB}
                    onSignUpEmail={onSignUpEmailACB}
                /> 
            </div>);
}