import ResultDetailsView from "../view/resultDetailsView.jsx";
import { observer } from "mobx-react-lite";

export default observer(function ResultDetails(props) {
    
    function removeDogCustomACB() {
        props.model.removeDogFromRecommendations(props.model.detailsDisplayedDog);
    }
    let name = props.model.detailsDisplayedDog.name;
    return (<ResultDetailsView dogDescription={props.model.dogDescriptions[name]} removeDogCustomACB={removeDogCustomACB} displayedDog={props.model.detailsDisplayedDog} stateOrganizations={props.model.stateOrganizations} organizations={props.model.organizations}/>);
})
