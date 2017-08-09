import React, { Component } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import 'styles.css';

class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  render() {
    const inputBoxes = (
      <div>
        <div className="input-field col s12 username">
          <label htmlFor="">Username</label>
          <input
            type="text"
            className="validate"
            name="username" />
        </div>
        <div className="input-field col s12">
          <label htmlFor="">password</label>
          <input
            type="password"
            className="calidate"
            name="password" />
        </div>
      </div>
    );

    const loginView = (
      <div>
        <div className="card-content">
          <div className="row">
            {inputBoxes}
            <a href="" className="wavew-effect waves=light btn">SUBMIT</a>
          </div>
        </div>

        <div className="footer">
          <div className="card-content">
            <div className="right">
              New Here?
              <Link to="/register">Create on account</Link>
            </div>
          </div>
        </div>
      </div>
    );

    const registerView = (
      <div className="card-content">
        <div className="row">
          {inputBoxes}
          <a className="waves-effect waves-light btn">CREATE</a>
        </div>
      </div>
    );

    return (
      <div className="container auth">
        <Link className="logo" to="/">MEMOPAD</Link>
        <div className="card">
          <div className="header blue white-text center">
            <div className="card-content">{this.props.mode ? "LOGIN" : "REGISTER"}</div>
          </div>
          {this.props.mode ? loginView : registerView}
        </div>
      </div>
    );
  }
}
Authentication.PropTypes = {
  mode: PropTypes.bool,
  onLoin: PropTypes.func,
  onRegister: PropTypes.func,
}
Authentication.defaultProps = {
  mode: true,
  onLoin: (id, pw) => { console.error("login function not defined"); },
  onRegister: (id, pw) => { console.error("register function not defined"); }
}

export default Authentication;