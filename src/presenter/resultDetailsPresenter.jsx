import ResultDetailsView from "../view/resultDetailsView.jsx";
import { observer } from "mobx-react-lite";

export default observer(
function ResultDetails(props){
    return (<ResultDetailsView currentlyDisplayedDog={props.model.currentlyDisplayedDog} organizations={props.model.organizations}/>);
}
)
