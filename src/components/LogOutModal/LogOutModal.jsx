import React, { createRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const LogOutModal = ({ closeLogOutModal, isLogOutModalOpen, handleLogout }) => {
  const backdropRef = createRef();

  useEffect(() => {
    const handleKeyPress = e => {
      if (e.code !== 'Escape') return;
      closeLogOutModal();
    };

    window.addEventListener('keydown', handleKeyPress);
    return window.addEventListener('keydown', handleKeyPress);
  });

  const handleBackdropClick = e => {
    const { current } = backdropRef;
    if (current && e.target !== current) {
      return;
    }
    closeLogOutModal();
  };
  return (
    isLogOutModalOpen && (
      <div
        role="dialog"
        ref={backdropRef}
        onClick={handleBackdropClick}
        className="modal__backdrop"
      >
        <section className="modal">
          <p>Are you sure you want to logout?</p>
          <div className="modal__wrapper">
            <button
              type="button"
              className="btn base-btn"
              onClick={handleLogout}
            >
              Yes
            </button>
            <button
              type="button"
              className="btn base-btn"
              onClick={closeLogOutModal}
            >
              No
            </button>
          </div>
        </section>
      </div>
    )
  );
};

LogOutModal.propTypes = {
  closeLogOutModal: PropTypes.func.isRequired,
  isLogOutModalOpen: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default LogOutModal;