import { connect } from 'react-redux';
import { closeLogOutModal } from '../../redux/controllers/actions';
import { isLogOutModalOpen } from '../../redux/controllers/selectors';
import { handleLogout } from '../../redux/session/actions';
import LogOutModal from './LogOutModal';

const mSTP = state => ({
  isLogOutModalOpen: isLogOutModalOpen(state),
});

const mDTP = dispatch => ({
  closeLogOutModal: () => dispatch(closeLogOutModal()),
  handleLogout: () => {
    dispatch(handleLogout());
    dispatch(closeLogOutModal());
  },
});

export default connect(mSTP, mDTP)(LogOutModal);
