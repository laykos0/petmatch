import "../styles/about.css";
import UserEvalImage1 from '../images/LoFi_User_Eval.jpg'; // Image for Formative Evaluation
import UserEvalImage2 from '../images/Pointing_Image_Lofi_Eval.jpg'; // Image for Summative Evaluation

function AboutView() {
  return (
    <div className="page-container">
      <div className="section">
        <h2 className="section-title">What is Woof Finder?</h2>
        <p>Woof Finder is an App dedicated to helping you find a 
            dog that will be your perfect match! Simply create an account and 
            find your dream dog! Our goal is to match you with dogs most compatible 
            with the personality and location you prefer. Our team, Kuba, Adi, Anthony and Maia thought, 
            what better way to do this than the same way we all look for love - by swiping! 
            And most importantly, since the dogs we match you with are all shelter dogs, you will 
            be able to give your perfect dog its forever home.</p>
      </div>

      <div className="section">
        <h2 className="section-title">User Evaluation</h2>

        {/* Formative Evaluation Section */}
        <div className="evaluation-section">
          <h3 className="subsection-title">Formative Evaluation</h3>
          <div className="evaluation-content">
            <div className="sub-section purple-box">
              <h4 className="sub-section-title">Method</h4>
              <ul>
                <li>Point one about the method...</li>
                <li>Point two about the method...</li>
                <li>Point three about the method...</li>
              </ul>
            </div>
            <div className="sub-section purple-box">
              <h4 className="sub-section-title">Insights</h4>
              <ul>
                <li>Insight one...</li>
                <li>Insight two...</li>
                <li>Insight three...</li>
              </ul>
            </div>
            <div className="sub-section">
              <h4 className="sub-section-title">Images</h4>
              <div className="user-evaluation-images">
                <img src={UserEvalImage1} alt="User Evaluation Image 1" />
              </div>
            </div>
          </div>
        </div>

        {/* Summative Evaluation Section */}
        <div className="evaluation-section">
          <h3 className="subsection-title">Summative Evaluation</h3>
          <div className="evaluation-content">
            <div className="sub-section purple-box">
              <h4 className="sub-section-title">Method</h4>
              <ul>
                <li>Point one about the method...</li>
                <li>Point two about the method...</li>
                <li>Point three about the method...</li>
              </ul>
            </div>
            <div className="sub-section purple-box">
              <h4 className="sub-section-title">Insights</h4>
              <ul>
                <li>Insight one...</li>
                <li>Insight two...</li>
                <li>Insight three...</li>
              </ul>
            </div>
            <div className="sub-section">
              <h4 className="sub-section-title">Images</h4>
              <div className="user-evaluation-images">
                <img src={UserEvalImage2} alt="User Evaluation Image 2" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Contact us</h2>
        <p>Include contact details or a contact form here...</p>
      </div>
    </div>
  );
}

export default AboutView;