import { useObserver } from "mobx-react-lite";

function ResultDetailsView(props){
    return useObserver(() => (
        <div>
        {props.displayedDog.name ?
        <div>
            <div>
                <h1> {props.displayedDog.name} </h1>
                {/* <div className="DogResults">
                    <button onClick={(evt) => console.log("going back to search")}>Back to search</button>
                    <button onClick={(evt) => console.log("logging out")}>Log out</button>
                </div> */}
                <div key = {props.displayedDog.name} class="dogResults">
                <img src= {props.displayedDog.image_link} height = "100"></img>
                <div className="dogResultsMainPart">
                    <p>{renderPersonalityAttributes(props.displayedDog.personalityPreferences)}</p>
                </div>
                <a href="#/results-summary">
                <button onClick={removeDogACB} class="dogResultsRemoveButton">x</button>
                <button onClick={console.log("going back")}>  Go back! </button>
                </a>
                </div>
            </div>

            <div>
            {props.dogDescription || "Loading"}
            </div>

            <div>
                <h3> Adoption shelters near you:</h3>
            </div>
            <div>
            <table>
                <thead>
                  <tr>
                    <th>Organization Name</th>
                    <th>Distance From You</th>
                    <th>Phone Number</th>
                    <th>Website Link</th>
                  </tr>
                </thead>

                <tbody>
                  { 
                  props.organizations ? props.organizations.map(renderOrganization) : <tr key={11}>
                  <td></td>
                  <td>loading </td>
                  <td>loading</td>
                  <td>loading</td>
                  </tr>
                  }
                </tbody>
            </table>
            </div>

        </div> : <h1>Please select a dog!</h1>}

        </div>
    ));
    
    function removeDogACB(){
        props.removeDogCustomACB();
    }

    function renderPersonalityAttributes(attributes){
        return (
        <div>
            <div>Good with other dogs: {renderStars(attributes.good_with_other_dogs)}</div>
            <div>Good with strangers: {renderStars(attributes.good_with_strangers)}</div>
            <div>Playfulness: {renderStars(attributes.playfulness)}</div>
            <div>Protectiveness: {renderStars(attributes.protectiveness)}</div>
            <div>Trainability: {renderStars(attributes.trainability)}</div>
            <div>Energy: {renderStars(attributes.energy)}</div>
            <div>Barking: {renderStars(attributes.barking)}</div>
            <div>Average height: {attributes.average_height}</div>
        </div>
        );
    }


    function renderOrganization(organization){
        return <tr key={organization.id } >
                 <td>{organization.name}</td>
                 <td>{organization.distance} miles </td>
                 <td>{organization.phone}</td>
                 <td>{organization.website}</td>
               </tr>;
    }

    function renderStars(numberOfStars){
        let stars = Array.from({ length: numberOfStars }, (_, index) => (
            <span key={index}>&#9733;</span>
        ));
        return stars;
    }

}

export default ResultDetailsView;