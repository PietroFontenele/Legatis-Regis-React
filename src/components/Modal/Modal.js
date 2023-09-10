import React from 'react';
import  './Modal.css';
import '../../light-theme.css';
import '../../dark-theme.css';
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-overlay" onClick={onClose} ></div>
      <div className="modal-content">{children}</div>
    </div>
  );
};

export default Modal;
