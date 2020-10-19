import React, { Component } from "react";
import DashboardHeader from "./DashboardHeader";

class Dashboard extends Component {
  componentDidMount() {
    const token = sessionStorage.getItem("jwt");
    if (!token) {
      this.props.history.push("/login");
    }
  }

  goToPage(page = '') {
    this.props.history.push(page);
  }

  render() {
    return <div>
      <DashboardHeader />
    
      <div className="dashboard-container container-fluid">
      
      <div className="row">
        <div className="col-lg-4 col-sm-6 col-xs-12">
          <div className="white-box" onClick={() => this.goToPage("home-content")}>
            <h3 className="box-title">Home</h3>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 col-xs-12">
          <div className="white-box" onClick={() => this.goToPage("about-content")}>
            <h3 className="box-title">About</h3>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 col-xs-12">
          <div className="white-box " onClick={() => this.goToPage("services-content")}>
            <h3 className="box-title">Services</h3>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 col-xs-12">
          <div className="white-box "  onClick={() => this.goToPage("primemen-content")}>
            <h3 className="box-title">Primemen</h3>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 col-xs-12">
          <div className="white-box " onClick={() => this.goToPage("eventsandpromo-content")}>
            <h3 className="box-title">EVENTS & PROMOTIONS</h3>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 col-xs-12">
          <div className="white-box " onClick={() => this.goToPage("products-content")}>
            <h3 className="box-title">Products</h3>
          </div>
        </div>
      </div>
    </div>
    </div>;
  }
}

export default Dashboard;
