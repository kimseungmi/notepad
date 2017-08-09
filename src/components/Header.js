import React, { Component } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const loginButton = (
      <li>
        <Link to="/login">
          <i className="material-icons">vpn_key</i>
        </Link>
      </li>
    );

    const logoutButton = (
      <li>
        <a href="">
          <i className="material-icons">lock_open</i>
        </a>
      </li>
    );
    return (
      <nav>
        <div className="nav-wrapper blue daarken-1">
          <Link to="/" className="brand-logo center">MEMOPAD</Link>
          <ul>
            <li>
              <a>
                <i className="material-icons">search</i>
              </a>
            </li>
          </ul>

          <div className="right">
            <ul>
              {this.props.isLoggedIn ? logoutButton : loginButton}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
Header.PropTypes = {
  isLoggedIn: PropTypes.bool,
  onLogout: PropTypes.func,
}
Header.defaultProps = {
  isLoggedIn: false,
  onLogout: () => {
    console.error("logout function not defined");
  }
}
export default Header;