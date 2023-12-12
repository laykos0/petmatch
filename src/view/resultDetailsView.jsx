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
            <button onClick={console.log("trying to remove dog")} class="dogResultsRemoveButton">x</button>
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
    function renderStars(numberOfStars){
        let stars = Array.from({ length: numberOfStars }, (_, index) => (
            <span key={index}>&#9733;</span>
        ));
        return stars;
    }

}

export default ResultDetailsView;