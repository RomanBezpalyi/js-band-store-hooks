import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import Header from '../components/Header';
import SigninForm from '../components/SigninForm';
import logo from '../assets/images/JS_BAND_STORE.png';

const SigninPage = ({ history, location }) => (
  <>
    <Header />
    <main className="main-content">
      <section className="signin-page-section">
        <img alt="JS BAND STORE LOGO" src={logo} className="logo" />
        <SigninForm history={history} location={location} />
      </section>
    </main>
  </>
);

SigninPage.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
};

export default SigninPage;
