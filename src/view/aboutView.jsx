import "../styles/about.css";
import UserEvalImage1 from '../images/LoFi_User_Eval.jpg'; // Image for Formative Evaluation
import UserEvalImage2 from '../images/Pointing_Image_Lofi_Eval.jpg'; // Image for Summative Evaluation

function AboutView() {
  return (
    <div className="page-container">
      <div className="section">
        <h2 className="section-title">Who are we?</h2>
        <p>Add your content about who you are here...</p>
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