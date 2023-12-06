import ResultsSummaryView from "../view/resultsSummaryView.jsx";

export default
function ResultsSummary(props){
    function removeDogCustomACB(dog){
        props.model.removeDog(dog);
    }
    return (<ResultsSummaryView dogRecommendations={[]} removeDogCustomACB={removeDogCustomACB}/>);
}
