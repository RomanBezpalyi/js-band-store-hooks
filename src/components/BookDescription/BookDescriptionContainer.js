import { connect } from 'react-redux';
import { getSelectedBook } from '../../redux/selectedBook/selectors';
import BookDescription from './BookDescription';

const mSTP = state => ({
  book: getSelectedBook(state),
});

export default connect(mSTP)(BookDescription);
