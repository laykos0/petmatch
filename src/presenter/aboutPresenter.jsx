import AboutView from "../view/aboutView";

export default function About(props) {
        return(<AboutView isAuthenticated={props.isAuthenticated}/>);
}
