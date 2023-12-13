import ResultDetailsView from "../view/resultDetailsView.jsx";
import { observer } from "mobx-react-lite";

export default observer(
function ResultDetails(props){
    function removeDogCustomACB(){
        props.model.removeDogFromRecommendations(props.model.detailsDisplayedDog);
    }
    return (<ResultDetailsView removeDogCustomACB={removeDogCustomACB} displayedDog={props.model.detailsDisplayedDog} organizations={props.model.organizations}/>);
}
)
