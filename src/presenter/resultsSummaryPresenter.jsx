import ResultsSummaryView from "../view/resultsSummaryView.jsx";
import { observer } from "mobx-react-lite";
import { React, useState, useEffect } from 'react';

export default observer(function ResultsSummary(props){

    console.log("HELLO SUMMARY");

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
            <ResultsSummaryView  selectDogCustomACB={selectDogCustomACB} dogRecommendations={props.model.currentlyRecommendedDogs} removeDogCustomACB={removeDogCustomACB}/>
        </div>
    );
})
