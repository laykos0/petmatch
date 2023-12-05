import Dog from "../dog.js";
import "../style.css";
function ResultsSummaryView(props){
    let dogs = props.dogRecommendations;
    return(
        <div>
            <h1> Your Recommended Dogs </h1>
            <div className="DogResults">
                <button onClick={(evt) => console.log("going back to search")}>Back to search</button>
                <button onClick={(evt) => console.log("logging out")}>Log out</button>
            </div>
            {dogs.map(individualDogCB)}
        </div>
    );

    function individualDogCB(dog){

        return (
            <div key = {dog.name} onClick = {dogSelectACB} class="dogResults">
            <img src= {dog.image_link} height = "100"></img>
            <div className="dogResultsMainPart">
                <h3>{dog.name}</h3>
                <p>{renderPersonalityAttributes(dog.personality)}</p>
            </div>
            <button onClick={dogRemoveACB} class="dogResultsMoveButton">x</button>
            </div>
        );
        function dogSelectACB(){
            console.log("selected dog: " + dog.name);
        }
        function dogRemoveACB(evt){
            console.log("tried to remove dog")
            evt.stopPropagation();
        }
        function renderPersonalityAttributes(personality){
            return <p>Good with other dogs: {personality.good_with_other_dogs}</p>
        }
    }
}

export default ResultsSummaryView;