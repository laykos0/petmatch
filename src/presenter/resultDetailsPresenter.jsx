import ResultDetailsView from "../view/resultDetailsView.jsx";
import { observer } from "mobx-react-lite";

export default observer(
function ResultDetails(props){
    function clickACB(){
        console.log("model:", props.model);
        props.model.number = props.model.number + 1
        props.model.user.name = "dawg";
        //console.log("updated model. it is now: ", props.model);
    }
    return (<ResultDetailsView model={props.model} currentlyDisplayedDog={props.model.currentlyDisplayedDog} name={props.model.user.name} number={props.model.number} click={clickACB}/>);
}
)
