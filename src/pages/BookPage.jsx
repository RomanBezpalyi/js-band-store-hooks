import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import Header from '../components/Header';
import BookDashboard from '../components/BookDashboard';

const BookPage = ({ match }) => (
  <>
    <Header />
    <main className="main-content">
      <BookDashboard match={match} />
    </main>
  </>
);

BookPage.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default BookPage;
