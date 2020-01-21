import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getToken } from '../../../redux/session/selectors';

const ProtectedComponent = ({ component: Component, token, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        token ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
};

ProtectedComponent.propTypes = {
  component: PropTypes.func.isRequired,
  token: PropTypes.string,
};

ProtectedComponent.defaultProps = {
  token: null,
};

const mSTP = state => ({
  token: getToken(state),
});

export default connect(mSTP)(ProtectedComponent);
