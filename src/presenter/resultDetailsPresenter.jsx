import ResultDetailsView from "../view/resultDetailsView.jsx";
import { observer } from "mobx-react-lite";

export default observer(
function ResultDetails(props){
    function clickACB(){
        props.model.user.name = "dawg";
        console.log("updated model. it is now: ", props.model);
    }
    return (<ResultDetailsView model={props.model} click={clickACB}/>);
}
)
