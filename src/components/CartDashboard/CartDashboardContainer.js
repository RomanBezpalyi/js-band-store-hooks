import { connect } from 'react-redux';
import { getCartList } from '../../redux/cartList/selectors';
import { purchaseBooks } from '../../redux/cartList/operations';
import CartDashboard from './CartDashboard';

const mSTP = state => ({
  books: getCartList(state),
});

const mDTP = { handlePurchase: purchaseBooks };

export default connect(mSTP, mDTP)(CartDashboard);
