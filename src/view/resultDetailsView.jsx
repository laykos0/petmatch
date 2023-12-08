/* Functional JSX component. Name must start with capital letter */
function ResultDetailsView(props){
    
    function renderDog(){
        if (props.currentlyDisplayedDog){
            return (<div>{props.currentlyDisplayedDog.name} </div>);
        } else {
            return <div> loading</div>;
        }
    }
    
    return(
    <div>
        I'm the result details view. Number is:
        {props.numberToDisplay}
        after number
        the name of the user is:
        {props.model.user.name}
        <button onClick={() => {props.click()}}>click me</button>
        displaying dogs:
        {renderDog()}
        
    </div>
    
    );
}

export default ResultDetailsView;