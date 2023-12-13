import ProfileView from "../view/profileView.jsx";

export default function Profile() {
  return <ProfileView onSignInEmail={()=>{console.log("hi1")}} onSignInGoogle={()=>{console.log("hi2")}}/>;
}
