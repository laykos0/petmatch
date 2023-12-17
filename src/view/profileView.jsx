import React, { useState } from 'react';
import { useObserver } from 'mobx-react-lite';
import '../styles/profile.css';

function ProfileView(props) {
  const [zipCode, setZipCode] = useState('');
  const [stateCode, setStateCode] = useState('');

  function handleZipCodeChange(event) {
    setZipCode(event.target.value);
  }

  function handleStateCodeChange(event) {
    setStateCode(event.target.value);
  }

  function handleUpdateLocation() {
    props.updateLocation(zipCode, stateCode);
  }

  function handleStartBrowsing() {
    props.startBrowsing()
  }

  return useObserver(() => (
    <div className="profile-container">
      <div className="profile-form">
        <h2 className="text-3xl font-thin py-5">Update Your Location</h2>
        <div className="form-group">
          <label htmlFor="zipCode" className="form-label">
            Zip Code
          </label>
          <input type="zipCode" id="zipCode" value={zipCode} onChange={handleZipCodeChange} className="form-input" />
        </div>

        <div className="form-group">
          <label htmlFor="stateCode" className="form-label">
            State Code (e.g 'MA')
          </label>
          <input type="stateCode" id="stateCode" value={stateCode} onChange={handleStateCodeChange} className="form-input" />
        </div>

        <button onClick={handleUpdateLocation} className="update-btn">
          Update Location
        </button>
        <button onClick={handleStartBrowsing} className="update-btn">
          Start Browsing
        </button>
      </div>
    </div>
  ));
}

export default ProfileView;
