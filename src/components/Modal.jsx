import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ onCancel, onClear }) => (
  <aside className="modal-container">
    <div className="modal">
      <h4>Remove all items from your shopping cart?</h4>
      <div className="btn-container">
        <button type="button" className="btn confirm-btn" onClick={() => onClear()}>Confirm</button>
        <button type="button" className="btn clear-btn" onClick={() => onCancel()}>Cancel</button>
      </div>
    </div>
  </aside>
);

Modal.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};

export default Modal;
