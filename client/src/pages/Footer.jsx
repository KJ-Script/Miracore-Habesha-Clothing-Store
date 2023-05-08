import React from "react";
import footerimage from "../assets/images/LandingPage/Footer-Background.png";

function Footer() {
  const footerStyle = {
    backgroundImage: `url(${footerimage})`,
  };

  return (
    <footer style={footerStyle}>
      <div className="h-screen ">
        <div className=" h-[50%] flex items-center justify-center font-semibold text-[50px] text-white">
          <h3>Visit our outlets in</h3>
          <h1>Addis</h1>
          <p>See Addresses</p>
        </div>
        <div className="h-[50%] bg-slate-800 text-white flex items-center justify-center space-x-40 text-xl">
          <div className="col-md-3 col-sm-6">
            <h5>Company Info</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Affiliate</a>
              </li>
              <li>
                <a href="#">Fashion Blogger</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h5>Help & Support</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Shipping Info</a>
              </li>
              <li>
                <a href="#">Refunds</a>
              </li>
              <li>
                <a href="#">How to Order</a>
              </li>
              <li>
                <a href="#">How to Track</a>
              </li>
              <li>
                <a href="#">Size Guides</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-6">
            <h5>Customer Care</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Payment Methods</a>
              </li>
              <li>
                <a href="#"> Bonus Point</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h5>Signup for the latest new</h5>
          </div>
          <div>
            <FontAwesomeIcon
              icon="fa-brands fa-facebook-f"
              style={{ color: "#424242" }}
            />
            <FontAwesomeIcon
              icon="fa-brands fa-instagram"
              style={{ color: "#454545" }}
            />
            <FontAwesomeIcon
              icon="fa-brands fa-twitter"
              style={{ color: "#484848" }}
            />
            <FontAwesomeIcon
              icon="fa-brands fa-youtube"
              style={{ color: "#4e4e4e" }}
            />
            <FontAwesomeIcon
              icon="fa-regular fa-envelope"
              style={{ color: "#3c3c3c" }}
            />
            <FontAwesomeIcon
              icon="fa-regular fa-phone"
              style={{ color: "#525252" }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
