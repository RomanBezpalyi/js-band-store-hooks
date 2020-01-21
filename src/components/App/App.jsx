import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getToken, isAuthentificated } from '../../redux/session/selectors';
import { refreshUser } from '../../redux/session/operations';
import ProtectedComponent from '../HOC/ProtectedComponent';
import SigninPage from '../../pages/SigninPage';
import BooksPage from '../../pages/BooksPage';
import BookPage from '../../pages/BookPage';
import CartPage from '../../pages/CartPage';
import NotFoundPage from '../../pages/NotFoundPage';

const App = ({ token, handleRefreshUser, authentificated }) => {
  useEffect(() => {
    if (token && !authentificated) handleRefreshUser();
  }, [token, handleRefreshUser, authentificated]);

  return (
    <Switch>
      <Redirect exact from="/" to="/signin" />
      <Route exact path="/signin" component={SigninPage} />
      <ProtectedComponent exact path="/books" component={BooksPage} />
      <ProtectedComponent exact path="/books/:id" component={BookPage} />
      <ProtectedComponent exact path="/cart" component={CartPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
};

App.propTypes = {
  token: PropTypes.string,
  authentificated: PropTypes.bool.isRequired,
  handleRefreshUser: PropTypes.func.isRequired,
};

App.defaultProps = {
  token: null,
};

const mSTP = state => ({
  token: getToken(state),
  authentificated: isAuthentificated(state),
});

const mDTP = {
  handleRefreshUser: refreshUser,
};

export default connect(mSTP, mDTP)(App);
