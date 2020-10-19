import React from "react";
import data from "../Constants";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row footer-row">
          <div className="victoria col col-xs-6 col-md-3">
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

          <div className="footer-about col col-xs-6 col-md-3">
            <ul>
              <li>{data.name}</li>
              <li>{data.address1}</li>
              <li>{data.address2}</li>
              <li>Phone: {data.phone}</li>
              <li>Fax: {data.fax}</li>
              <li>{data.email}</li>
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
