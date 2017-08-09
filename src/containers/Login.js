import React, { Component } from 'react';
import { Authentication } from 'components';
import { connect } from 'react-redux';
import { loginRequest } from 'actions/authentication';
import { browserHistory } from 'react-router';
import Materialize from 'materialize-css';
import $ from 'jquery';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange() {
    return (<div></div>);
  }
  handleLogin() {
    let id = this.state.username;
    let pw = this.state.password;

    return this.props.loginRequest(id, pw).then(
      (success) => {
        if (!success) {
          let loginData = {
            isLoggedIn: true,
            username: id
          };

          document.cookie = 'key=' + btoa(JSON.stringify(loginData));

          Materialize.toast('Welcome,' + id + '!', 2000);
          browserHistory.push('/');
          return true;
        } else {
          let $toastContent = $('<span style="color: #FFB4BA">Incorrect username of password</span>');
          Materialize.toast($toastContent, 2000);
          return false;
        }
      }
    );
  }

  render() {
    return (
      <div>
        <Authentication mode={true}
          onLogin={this.handleLogin} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.authentication.login.status
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginRequest: (id, pw) => {
      return dispatch(loginRequest(id, pw));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);