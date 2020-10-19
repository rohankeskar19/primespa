import React from "react";
import { Link } from "react-router-dom";
function DarkNav() {
  return (
    <header className="common-header">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link className="navbar-brand" to="/">
              <img src="/images/logo.png" alt="Logo" className="logo" />
            </Link>
          </div>
          <div id="navbar" className="pull-left collapse navbar-collapse">
            <ul className="nav navbar-nav toggle-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>

              {/* <li>
                <Link to="/primespa">PrimeSpa</Link>
              </li> */}
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/primemen">PrimeMen</Link>
              </li>
              <li>
                <Link to="/eventsandpromo">Events & Promotions</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default DarkNav;
