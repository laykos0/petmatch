import ResultDetailsView from "../view/resultDetailsView.jsx";
import { observer } from "mobx-react-lite";

export default observer(
function ResultDetails(props){
    return (<ResultDetailsView displayedDog={props.model.detailsDisplayedDog} organizations={props.model.organizations}/>);
}
)
