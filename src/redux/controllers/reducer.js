import { ActionTypes } from './actions';

const isLogOutModalOpen = (state = false, { type }) => {
  switch (type) {
    case ActionTypes.OPEN_LOG_OUT_MODAL:
      return true;
    case ActionTypes.CLOSE_LOG_OUT_MODAL:
      return false;
    default:
      return state;
  }
};

export default isLogOutModalOpen;
