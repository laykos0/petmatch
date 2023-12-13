import "../styles/about.css";
import UserEvalImage1 from '../images/LoFi_User_Eval.jpg';
import UserEvalImage2 from '../images/Pointing_Image_Lofi_Eval.jpg';

function AboutView() {
  return (
    <div className="page-container my-10">
      <div className="section">
        <h2 className="section-title">Who are we?</h2>
        <p>
          We are a group of students working together to make a project for the course DH2642 (Interaction Programming and Dynamic Web) at KTH Royal Insititute of Technology. The focus of the course is on User Centric Design.  
        </p>
        <br />
        <div className=" text-center font-bold">
        <div className=" text-2xl"> Group Members: </div>
        <ul>
          <li>Aditya Gupta</li>
          <li>Anthony Jones</li>
          <li>Jakub Rybak</li>
          <li>Maia Ramambason</li>
        </ul>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">User Evaluation</h2>
        <div className="evaluation-section">
          <div className="evaluation-content row-container">
            <div className="sub-section">
              <div className="user-evaluation-images">
                <img src={UserEvalImage1} alt="User Evaluation Image 1" />
              </div>
            </div>
            <div className="sub-section box">
              <h4 className="sub-section-title">Method</h4>
              <ul>
                <li>Point one about the method...</li>
                <li>Point two about the method...</li>
                <li>Point three about the method...</li>
              </ul>
            </div>
            <div className="sub-section box">
              <h4 className="sub-section-title">Insights</h4>
              <ul>
                <li>Insight one...</li>
                <li>Insight two...</li>
                <li>Insight three...</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="evaluation-section">
          <h3 className="section-title">Summative Evaluation</h3>
          <div className="evaluation-content row-container">
            <div className="sub-section">
                <div className="user-evaluation-images">
                  <img src={UserEvalImage2} alt="User Evaluation Image 2" />
                </div>
            </div>
            <div className="sub-section box">
              <h4 className="sub-section-title">Method</h4>
              <ul>
                <li>Point one about the method...</li>
                <li>Point two about the method...</li>
                <li>Point three about the method...</li>
              </ul>
            </div>
            <div className="sub-section box">
              <h4 className="sub-section-title">Insights</h4>
              <ul>
                <li>Insight one...</li>
                <li>Insight two...</li>
                <li>Insight three...</li>
              </ul>
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