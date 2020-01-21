export const ActionTypes = {
  OPEN_LOG_OUT_MODAL: 'OPEN_LOG_OUT_MODAL',
  CLOSE_LOG_OUT_MODAL: 'CLOSE_LOG_OUT_MODAL',
};

export const openLogOutModal = () => ({ type: ActionTypes.OPEN_LOG_OUT_MODAL });

export const closeLogOutModal = () => ({
  type: ActionTypes.CLOSE_LOG_OUT_MODAL,
});
