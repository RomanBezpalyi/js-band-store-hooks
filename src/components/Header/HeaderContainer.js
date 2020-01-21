import { connect } from 'react-redux';
import {
  isAuthentificated,
  getAvatar,
  getUsername,
} from '../../redux/session/selectors';
import { getTotalCartCount } from '../../redux/cartList/selectors';
import { openLogOutModal } from '../../redux/controllers/actions';
import Header from './Header';

const mSTP = state => ({
  isAuthentificated: isAuthentificated(state),
  avatar: getAvatar(state),
  username: getUsername(state),
  count: getTotalCartCount(state),
});

const mDTP = { openLogOutModal };

export default connect(mSTP, mDTP)(Header);
