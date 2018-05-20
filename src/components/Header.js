import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <div className="header__item">
          <Link className="header__item__title" to="/dashboard">
            <h1>Postify</h1>
          </Link>
        </div>
        <div className="header__divider"></div>
        <div className="header__item">
          <Link className="header__item__title" to="/about">
            <h3>About</h3>
          </Link>
          <button className="button button--link" onClick={startLogout}>Logout</button>
        </div>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
