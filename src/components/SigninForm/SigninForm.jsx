import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import LoaderSpinner from '../LoaderSpinner';

const SigninForm = ({
  onSignin,
  error,
  isLoading,
  clearErrorMsg,
  signInError,
}) => {
  const [username, setUsername] = useState('');
  const prevUsernameLength = useRef();
  const prevError = useRef();

  useEffect(() => {
    prevUsernameLength.current = username.length;
  });

  useEffect(() => {
    prevError.current = error;
  }, [error]);

  useEffect(() => {
    if (prevError.current && prevUsernameLength !== username.length) {
      clearErrorMsg();
    }
  }, [clearErrorMsg, username]);

  const handleSubmit = e => {
    e.preventDefault();
    if (username.length < 4 || username.length > 16) {
      signInError();
      return;
    }
    onSignin({ username });
  };

  const handleChange = ({ target: { value } }) => setUsername(value);

  return (
    <>
      {isLoading && (
        <div className="signin-loader">
          <LoaderSpinner />
        </div>
      )}
      <form onSubmit={handleSubmit} className="signin-form">
        <label htmlFor="username">
          Username
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleChange}
            placeholder="Type username"
            className="form-control"
          />
        </label>
        {error && <div className="error-msg">Field is not valid.</div>}
        <button className="btn base-btn signin-form-btn" type="submit">
          Sign-In
        </button>
      </form>
    </>
  );
};

SigninForm.propTypes = {
  onSignin: PropTypes.func.isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  clearErrorMsg: PropTypes.func.isRequired,
  signInError: PropTypes.func.isRequired,
};

SigninForm.defaultProps = {
  error: null,
};

export default SigninForm;
