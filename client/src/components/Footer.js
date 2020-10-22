import React from "react";
import { Link } from "react-router-dom";
import data from "../Constants";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row footer-row">
          <div className="victoria col col-xs-4 col-md-2">
            <img
              src="/images/logo.png"
              alt=""
              className="img img-responsive logo-footer"
            />

            <ul className="nav navbar-nav social-icons">
              <li>
                <a href="https://www.facebook.com/primemedspa/" target="_blank">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i className="fa fa-twitter" />
                </a>
              </li>
            </ul>
          </div>
          <span className="vertical-line"></span>
          <div className="footer-about col col-xs-4 col-md-2 ">
            <ul className="address-info">
              <li>{data.name}</li>
              <li>{data.address1}</li>
              <li>{data.address2}</li>
              <li>Phone: {data.phone}</li>
              <li>Fax: {data.fax}</li>
              <li>{data.email}</li>
            </ul>
          </div>
          <span className="vertical-line"></span>
          <div className="col col-xs-4 col-md-2 ">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/products">Products</Link></li>
            </ul>
          </div>
        </div>

        <div className="row copyright">
          <div className="col col-md-6">
            <p>{data.copyright}</p>
          </div>
          <div className="col col-md-6">
            <ul className="nav navbar-nav pull-right">
              <li>
                <a href="#">
                  <img src="/images/carecredit-logo.png" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
