import React, { Component } from "react";
import "../../style.css";
import axios from "axios";

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: "",
  };

  componentDidMount() {
    const token = sessionStorage.getItem("jwt");

    if (token) {
      this.props.history.push("/dashboard");
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    if (email.trim() != "" && password.trim() != "") {
      axios
        .post("/api/login", {
          email,
          password,
        })
        .then((res) => {
          const token = res.data.token;
          sessionStorage.setItem("jwt", token);
          this.props.history.push("/dashboard");
        })
        .catch((err) => {
          this.setState({
            error: err.response.data.error,
          });
        });
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { error } = this.state;
    return (
      <div className="login-container">
        <div className="form-container">
          <h5 className="login-header">Login</h5>
          {error.length > 0 && <p className="login-error">{error}</p>}

          <form className="login-form" onSubmit={this.handleSubmit}>
            <div className="input-container">
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={this.handleChange}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={this.handleChange}
              />
            </div>

            <button>Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
