import ResultsSummaryView from "../view/resultsSummaryView.jsx";
import { observer } from "mobx-react-lite";

export default observer(
function ResultsSummary(props){
    function removeDogCustomACB(dog){
        props.model.removeDogFromRecommendations(dog);
    }

    if(props.model.currentlyRecommendedDogs.length == 0){
        props.model.getDogRecommendations();
    }

    return (<ResultsSummaryView dogRecommendations={props.model.currentlyRecommendedDogs} removeDogCustomACB={removeDogCustomACB}/>);
}
)
