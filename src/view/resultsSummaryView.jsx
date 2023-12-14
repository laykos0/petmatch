import "../styles/summary.css";
import "../styles/index.css"
import { useObserver } from "mobx-react-lite";

function ResultsSummaryView(props){
    return useObserver(() => (
       <div>
            <div className="outline-text font-bold text-5xl mt-12 text-violet-600"> Your Recommended Dogs </div>
            <div className="dogResultsContainer mt-15">
                {props.dogRecommendations.map(individualDogCB)}
            </div>
       </div>
    ));

    function individualDogCB(dog){
        function dogSelectACB(){
            console.log("selected dog: " + dog.name);
            props.selectDogCustomACB(dog);
        }
        function dogRemoveACB(evt){
            console.log("removing a dog from recommendations")
            props.removeDogCustomACB(dog);
            evt.stopPropagation();
        }
        return (
            <div key = {dog.name + "-1"}>
                <div key = {dog.name} onClick = {dogSelectACB} className="dogResults border-solid border-4 border-violet-100 my-10 rounded-lg bg-gradient-to-tl from-violet-100 to-orange-400 bg-opacity-50 font-mono font-extrabold text-xl">
                    <img key = {dog.name + "0"} className="ml-4" src= {dog.image_link} height = "100"></img>
                    <div key = {dog.name + "1"} className="dogResultsMainPart">
                    <a href="#/result-details">
                        <button key = {dog.name + "2"} className=' font-bold  bg-indigo-500 mb-5 p-5 rounded-full mt-4 mr-20'>{dog.name}</button>
                    </a>
                    </div>
                    <button key = {dog.name + "3"} onClick={dogRemoveACB} className="font-bold bg-indigo-500 mb-5 p-5 rounded-full">x</button>
                </div>
            </div>
        );
    }
}

export default ResultsSummaryView;