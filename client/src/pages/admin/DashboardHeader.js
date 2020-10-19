import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class DashboardHeader extends Component {
    componentDidMount() { }

    logOut = () => {
        sessionStorage.removeItem("jwt");
        this.props.history.push("/login");
    }

    render() {
        return (
            <section className="dashboard-header">
                <div className="header">
                    <ul className="header-menu-ul">
                        <li>
                            <a>
                                <i className="fa fa-bars"></i>
                            </a>
                        </li>
                    </ul>
                    <ul className="header-menu-ul">
                        <li>
                            <a onClick={this.logOut}>
                                Logout
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default withRouter(DashboardHeader);
