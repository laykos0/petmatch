import ProfileView from "../view/profileView.jsx";
import { observer } from "mobx-react-lite";
import { useNavigate } from 'react-router-dom'

export default observer(function Profile(props) {
  
  const navigate = useNavigate();

  async function updateLocationCustomACB(zipCode, stateCode) {
    function checkValidZipCode(zipCode) {
      return /^\d{5}(-\d{4})?$/.test(zipCode);
    }
    function checkValidStateCode(stateCode) {
      return /^[a-zA-Z]{2}$/.test(stateCode);
    }
    if (!checkValidZipCode(zipCode)) {
      alert("Invalid Zip Code! Please try again");
      return;
    }
    if (!checkValidStateCode(stateCode)) {
      alert("Invalid State Code! Please try again!");
      return;
    }
    await props.model.updateUserLocation(zipCode, stateCode);
    alert("Location saved!")
  }

  function startBrowsingACB() {
    navigate("/browsing")
  }

  return <ProfileView 
            updateLocation={(zipCode, stateCode)=>{updateLocationCustomACB(zipCode, stateCode)}} 
            startBrowsing={startBrowsingACB}
         />;
})