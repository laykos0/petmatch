/* Functional JSX component. Name must start with capital letter */
function ResultDetailsView(props){
    

    return(
    <div>
        I'm the result details view
        {JSON.stringify(props.model)}
        <button onClick={() => {props.click()}}>click me</button>
    </div>
    
    );
}

export default ResultDetailsView;