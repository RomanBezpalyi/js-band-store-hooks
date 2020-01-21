import { connect } from 'react-redux';
import { signin } from '../../redux/session/operations';
import { signInError, clearErrorMsg } from '../../redux/session/actions';
import { getSessionError } from '../../redux/errors/selectors';
import { getSessionLoading } from '../../redux/loadings/selectors';
import SigninForm from './SigninForm';

const mSTP = state => ({
  error: getSessionError(state),
  isLoading: getSessionLoading(state),
});

const mDTP = dispatch => ({
  onSignin: username => dispatch(signin(username)),
  signInError: () => dispatch(signInError('Invalid field.')),
  clearErrorMsg: () => dispatch(clearErrorMsg()),
});

export default connect(mSTP, mDTP)(SigninForm);
