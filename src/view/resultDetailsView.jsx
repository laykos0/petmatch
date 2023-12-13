import { useObserver } from "mobx-react-lite";

function ResultDetailsView(props){
    let currentlyDisplayedDog = {
        name: "Affenpinscher",
        image_link: "https://api-ninjas.com/images/dogs/affenpinscher.jpg",
        personalityPreferences: {
            good_with_other_dogs: 3,
            protectiveness: 1,
            good_with_strangers: 3,
            playfulness: 2, 
            trainability: 4,
            energy: 5,
            barking: 1,
            average_height: 10.25
        }
    }

    return useObserver(() => (
        <div>
            <div>
                <h1> {currentlyDisplayedDog.name} </h1>
                {/* <div className="DogResults">
                    <button onClick={(evt) => console.log("going back to search")}>Back to search</button>
                    <button onClick={(evt) => console.log("logging out")}>Log out</button>
                </div> */}
                <div key = {currentlyDisplayedDog.name} class="dogResults">
                <img src= {currentlyDisplayedDog.image_link} height = "100"></img>
                <div className="dogResultsMainPart">
                    <p>{renderPersonalityAttributes(currentlyDisplayedDog.personalityPreferences)}</p>
                </div>
                <button onClick={console.log(props)} class="dogResultsRemoveButton">x</button>
                </div>
            </div>

            <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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

        </div>
    ));
    
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