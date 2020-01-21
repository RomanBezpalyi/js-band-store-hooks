import React from 'react';
import Header from '../components/Header';
import FilterForm from '../components/FilterForm';
import BookList from '../components/BookList';

const BooksPage = () => (
  <>
    <Header />
    <main className="main-content">
      <FilterForm />
      <BookList />
    </main>
  </>
);

export default BooksPage;
