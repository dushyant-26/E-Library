import React from "react";
import './footer.css';
const Footer = () => {
  return (
    <div className="foot" id='footer'>
      <h1 className="footer-h1">Follow Us On Our Social Media Handle 🤟</h1>
      <div className="footersocial-media">
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-whatsapp"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>

      </div>
    </div>
  );
}
export default Footer;