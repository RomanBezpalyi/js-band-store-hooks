import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { isAuthentificated } from '../../../redux/session/selectors';

const AuthRedirect = BaseComponent => {
  const WithAuthRedirect = ({ authentificated, history }) => {
    useEffect(() => {
      history.replace('/books');
    }, [authentificated, history]);

    return <BaseComponent />;
  };

  WithAuthRedirect.propTypes = {
    authentificated: PropTypes.bool.isRequired,
    history: ReactRouterPropTypes.history.isRequired,
  };

  const mSTP = state => ({ authentificated: isAuthentificated(state) });

  return connect(mSTP)(WithAuthRedirect);
};

export default AuthRedirect;
