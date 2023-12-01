/* Functional JSX component. Name must start with capital letter */

import '../welcome.css';

function WelcomeView(props){
    return(
    // <div>
    //     I'm the welcome WelcomeView
    //     <input type="text" onChange={TextInputACB}/>
    // </div>
    <div >
        <h1 className ="petmatch-heading">Petmatch</h1>
        <div className="button-container">
        <button onClick={SignUpACB}>Sign Up</button>
        <button onClick={LogInACB}>Log In</button>
        </div>
    </div>

    );

    
    function SignUpACB(evt){
        console.log("Sign up button");
    }

    function LogInACB(evt){
        console.log("Log In button");
    }
}

export default WelcomeView;