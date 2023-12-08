import BrowsingView from "../view/browsingView.jsx";

export default
function Browsing(props){

    function x(likeOrDislike) {
        props.model.generateDisplayDog()
        if (likeOrDislike) {
            // Handle Like
        } else {
            // Handle Dislike
        }
    }


    return (<BrowsingView model={props.model} generateDog={generateDogACB} />);
}
