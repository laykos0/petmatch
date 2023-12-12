import "../styles/about.css"


function AboutView(){
    console.log("HERE");
    return(

        // <div className="about-content">
        //     I'm the about AboutView
        // </div>


        <div>
        <div className="section">
        <h2>Who are we?</h2>
        <p>Add your content about who you are here...</p>
        </div>

        <div className="section">
        <h2>User evaluation process</h2>
        <p>Add information about the user evaluation process here...</p>
        <div className="user-evaluation-images">
            <img src="image1.jpg" alt="User Evaluation Image 1" />
            <img src="image2.jpg" alt="User Evaluation Image 2" />
            <img src="image3.jpg" alt="User Evaluation Image 3" />
        </div>
        </div>

        <div className="section">
        <h2>Contact us</h2>
        <p>Include contact details or a contact form here...</p>
        </div>
        </div>
    );
}

export default AboutView;