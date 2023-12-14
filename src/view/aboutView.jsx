import "../styles/about.css";
import UserEvalImage1 from '../images/LoFi_User_Eval.jpg';
import UserEvalImage2 from '../images/Pointing_Image_Lofi_Eval.jpg';
import UserEvalImage3 from '../images/Pointing_Image_Lofi_Eval.jpg';
import UserEvalImage4 from '../images/Pointing_Image_Lofi_Eval.jpg';

function AboutView() {
  return (
    <div className="page-container my-10">
      <div className="section">
        <h2 className="section-title">What is Woof Finder?</h2>
        <p>Woof Finder is an App dedicated to helping you find a dog 
          that will be your perfect match! Simply create an account and find your dream dog!
           Our goal is to match you with dogs most compatible with the personality and location you prefer. 
           Our team, Kuba, Adi, Anthony and Maia thought, what better way to do this than 
           the same way we all look for love - by swiping! And most importantly, 
          since the dogs we match you with are all shelter dogs,
           you will be able to give your perfect dog its forever home.</p>
      </div>

      <div className="section">
        <h2 className="section-title">Evaluation</h2>
        <div className="evaluation-section">
          <div className="evaluation-content row-container">
            <div className="sub-section">
              <div className="user-evaluation-images">
                <div className="image-grid">
                  <img src={UserEvalImage1} alt="User Evaluation Image 1" />
                  <img src={UserEvalImage2} alt="User Evaluation Image 2" />
                  <img src={UserEvalImage3} alt="User Evaluation Image 3" />
                  <img src={UserEvalImage4} alt="User Evaluation Image 4" />
                </div>
              </div>
            </div>
            <div className="sub-section">
              <h4 className="sub-section-title">Formative Evaluation</h4>
              <p>
                Here, you can provide your evaluation text that accompanies the images.
                <br />
                This content will appear alongside the images.
                {/* Add more paragraphs as needed */}
              </p>
            </div>
          </div>
        </div>
        <div className="evaluation-section">
          <div className="evaluation-content row-container">
            <div className="sub-section">
              <div className="user-evaluation-images">
                <div className="image-grid">
                  <img src={UserEvalImage1} alt="User Evaluation Image 1" />
                  <img src={UserEvalImage2} alt="User Evaluation Image 2" />
                  <img src={UserEvalImage3} alt="User Evaluation Image 3" />
                  <img src={UserEvalImage4} alt="User Evaluation Image 4" />
                </div>
              </div>
            </div>
            <div className="sub-section">
              <h4 className="sub-section-title">Summative Evaluation</h4>
              <p>
                Here, you can provide your evaluation text that accompanies the images.
                <br />
                This content will appear alongside the images.
                {/* Add more paragraphs as needed */}
              </p>
            </div>
          </div>
        </div>

      </div>

      <div className="section contact-detailss">
        <h2 className="section-title">Contact us</h2>
        <div className="contact-details-container">
          <p className="contact-item">Email: example@example.com</p>
          <p className="contact-item">Phone: +1234567890</p>
          <p className="contact-item">Address: 123 Example Street, City, Country</p>
        </div>
      </div>
    </div>
  );
}

export default AboutView;