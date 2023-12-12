import React from "react";
import '../styles/footer.css'; // Import your footer CSS file here

function Footer() {
  return (
    <footer className="footer">
      <div className="contact-info">
        <p>Contact Telephone Number: +46 7901 112 432</p>
        <div className="contact-emails">
          <p>Contact Emails:</p>
          <ul>
            <li>email1@example.com</li>
          </ul>
        </div>
      </div>
      <a href="#/about" className="about-link">
        About
      </a>
    </footer>
  );
}

export default Footer;