import { connect } from 'react-redux';
import { getGetSelectedBookLoading } from '../../redux/loadings/selectors';
import { getBook } from '../../redux/selectedBook/operations';
import { removeSelectedBookFromStore } from '../../redux/selectedBook/actions';
import BookDashboard from './BookDashboard';

const mSTP = state => ({
  isLoading: getGetSelectedBookLoading(state),
});

const mDTP = {
  getBook,
  removeSelectedBookFromStore,
};

export default connect(mSTP, mDTP)(BookDashboard);
