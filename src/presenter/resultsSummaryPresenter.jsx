import ResultsSummaryView from "../view/resultsSummaryView.jsx";
import { observer } from "mobx-react-lite";
import { React, useState, useEffect } from 'react';

export default observer(function ResultsSummary(props){

    const [isLoading, setIsLoading] = useState(true);
    const modelToPass = isLoading ? {
        currentlyDisplayedDog: {
            name: "Loading",
            image_link: "https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif"
        }
    } : props.model;

    // useEffect(() => {
    // async () => {
    //     if (props.model.currentlyRecommendedDogs.length == 0) {
    //         await props.model.getDogRecommendations();
    //     }
    // }    
    // }, []); 

    function removeDogCustomACB(dog) {
        props.model.removeDogFromRecommendations(dog);
    }

    function selectDogCustomACB(dog) {
        props.model.selectDog(dog);
    }

    if (props.model.currentlyRecommendedDogs.length == 0) {
        props.model.getDogRecommendations();
    }

    return (
        <div>
            <ResultsSummaryView model={modelToPass} selectDogCustomACB={selectDogCustomACB} dogRecommendations={props.model.currentlyRecommendedDogs} removeDogCustomACB={removeDogCustomACB}/>
        </div>
    );
})
