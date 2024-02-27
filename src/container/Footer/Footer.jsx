import React from "react";
import "./Footer.css";
import { images, data } from "../../constants";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="row align-items-center">
        <div className="col-md-2 col-12">
          <img
            src={images.newlogo}
            alt="logo"
            width="50px"
            style={{
              aspectRatio: "1",
              borderRadius: "50%",
              margin: "0 1rem 0 0",
            }}
          />
          <span style={{ fontSize: "15px" }}>SV-World</span>
        </div>
        <div className="col-md-8 col-12 ">
          <ul className="navbar-footer">
            {data.Menu.slice(0, -1).map((item, index) => (
              <li>
                {" "}
                <a href="#">{item.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-2 col-12 text-center text-md-end fs-4">
          <BsFacebook /> <BsTwitter />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-12">
          <ul className="info-contact">
            <li>
              {" "}
              <span>Contact us:</span>
            </li>
            <li>Email: freelancesv20@gmail.com</li>
            <li>Phone: 123-456-7890</li>
            <li>Address: Bangalore, Karnataka, India</li>
          </ul>
        </div>
        <div className="col-md-8 col-12">
          <form className="row form-news">
            <div className="col-lg-6 col-12">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="col-lg-6 col-12 mt-3 mt-lg-0">
              <button type="submit" className="btn-positivus w-100">
                Subscribe to news
              </button>
            </div>
          </form>
        </div>

        <div className="rights">
          <p>© 2023 SV-Developers. All Rights Reserved.</p>
          <p>
            <a href="#" alt="Privacy Policy">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
