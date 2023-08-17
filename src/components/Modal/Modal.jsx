import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { CloseButton, ModalStyled } from './ModalStyled';

function ModalComponent({ onCloseModal, car }) {
  const handleClickOverlay = evt => {
    if (evt.target === evt.currentTarget) {
      onCloseModal();
    }
  };
  
  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') {
        onCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onCloseModal]);

  const {
    model,
    type,
    year,
    img,
    make,
    rentalPrice,
    rentalCompany,
    functionalities,
    address,
  } = car;

  return (
    <ModalStyled className="overlay" onClick={handleClickOverlay}>
         
        <div className="modal-content">
        <CloseButton onClick={onCloseModal}>
          &times;
        </CloseButton>
        <img src={img} alt={`${make} ${model}`} />
        <h2>{make} {model}</h2>
        <p>Year: {year}</p>
        <p>Rental Price: {rentalPrice}</p>
        <p>Rental Company: {rentalCompany}</p>
        <p>Address: {address}</p>
        <p>Type: {type}</p>
        <p>Functionalities: {functionalities.join(', ')}</p>

        <a href="tel:+380730000000" target="_blank" rel="noopener noreferrer">
          <button type='button'>Rental car</button>
        </a>
      </div>
        
    
    </ModalStyled>
  );
}

ModalComponent.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  car: PropTypes.object.isRequired,
};

export default ModalComponent;