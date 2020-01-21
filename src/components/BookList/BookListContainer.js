import { connect } from 'react-redux';
import { getFilteredBooks } from '../../redux/books/selectors';
import { getGetBooksLoading } from '../../redux/loadings/selectors';
import { getBooks as getBooksOperation } from '../../redux/books/operations';
import { isAuthentificated } from '../../redux/session/selectors';
import BookList from './BookList';

const mSTP = state => ({
  books: getFilteredBooks(state),
  isLoading: getGetBooksLoading(state),
  authentificated: isAuthentificated(state),
});

const mDTP = dispatch => ({
  getBooks: () => dispatch(getBooksOperation()),
});

export default connect(mSTP, mDTP)(BookList);
