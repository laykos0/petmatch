import BrowsingView from "../view/browsingView.jsx";

export default
function Browsing(props){
    function generateDogACB() {
        props.model.generateDisplayDog()
    }

    return (<BrowsingView model={props.model} generateDog={generateDogACB} />);
}
