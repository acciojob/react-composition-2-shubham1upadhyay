import React from 'react';

const Modal = ({show, onClose, children}) => {
  if (!show) {
    return null; 
  }

  function close(){
    onClose();
  };

  return (
    <div className="model-overlay">
      <div>{children}
        <button className="model-close" onClick={close}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
