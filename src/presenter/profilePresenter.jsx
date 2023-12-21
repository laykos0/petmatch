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
      const stateCodes = new Set([
        'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
        'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
        'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
        'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
        'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
      ]);

      if(/^[a-zA-Z]{2}$/.test(stateCode)){
        return stateCodes.has(stateCode);
      }
      return false;
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
            zip={props.model.user.location.zip}
            state={props.model.user.location.state}
         />;
})