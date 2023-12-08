import BrowsingView from "../view/browsingView.jsx";

export default
function Browsing(props){

    function xACB(likeOrDislike) {
        props.model.generateDisplayDog()
        //console.log(props.model.currentlyDisplayedDog.name)
        if (likeOrDislike) {
            // Handle Like
        } else {
            // Handle Dislike
        }
    }

    props.model.generateDisplayDog()

    console.log(props.model.currentlyDisplayedDog.name)
    return (<BrowsingView model={props.model} x={xACB} />);
}
