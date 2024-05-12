import React from 'react';
import './PopupMessage.css'

const PopupMessage = ({ type, onClose }) => {
  let message = "";
  switch (type) {
    case "success":
      message = "Item successfully added to cart.";
      break;
    case "warning":
      message = "Item is already in the basket. Click the cart icon to view and change the type/quantity";
      break;
    default:
      message = "We are experiencing some Technical Issues. We kindly ask for your patience as we resolve";
  }

  return (
    <div className='popup-container'>
      <div className="toast-container " role="alert" aria-live="assertive">
          <button className="close-btn" onClick={onClose}>&times;</button>
        <div className="toast-body toast--white toast--animated">
          <div className='toast__header'>
            <p>{message}</p>
          </div>
          <div className="progress-bar progress-bar--yellow"></div>
        </div>
      </div>
    </div>
  );
};

export default PopupMessage;
