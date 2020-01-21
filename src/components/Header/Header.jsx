import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ReactComponent as CartIcon } from '../../assets/icons/shopping-cart.svg';
import LogOutModal from '../LogOutModal';

const Header = ({
  isAuthentificated,
  avatar,
  username,
  count,
  openLogOutModal,
}) => (
  <header className="page-header header">
    <div className="header__flexcontainer">
      <h1 className="h2 text-left app-logo">
        <Link to="/books">JS BAND STORE / Roman Bezpalyi</Link>
      </h1>
      {isAuthentificated && (
        <>
          <div className="header-nav-wrapper">
            <nav className="header-nav">
              <ul className="list-unstyled header-nav-list">
                <li>
                  <Link to="/cart">
                    <button type="button" className="cart-btn">
                      <CartIcon />
                    </button>
                  </Link>
                  {count > 0 && <div className="cart-count">{count}</div>}
                </li>
                <li>
                  <button
                    type="button"
                    className="btn logout-btn"
                    onClick={openLogOutModal}
                  >
                    Sign-Out
                  </button>
                </li>
              </ul>
            </nav>
            <img
              alt="avatar"
              src={avatar}
              width="50"
              height="50"
              className="img-circle"
            />
            <p className="h4">{username}</p>
          </div>
          <LogOutModal />
        </>
      )}
    </div>
  </header>
);

Header.propTypes = {
  isAuthentificated: PropTypes.bool.isRequired,
  avatar: PropTypes.string,
  username: PropTypes.string,
  openLogOutModal: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};

Header.defaultProps = {
  avatar: '',
  username: '',
};

export default Header;
