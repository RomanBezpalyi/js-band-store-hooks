import { connect } from 'react-redux';
import { getSelectedBook } from '../../redux/selectedBook/selectors';
import { addBookToCart } from '../../redux/cartList/actions';
import CartForm from './CartForm';

const mSTP = state => ({
  book: getSelectedBook(state),
});

const mDTP = { addBookToCart };

export default connect(mSTP, mDTP)(CartForm);
