import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { CloseButton, ModalStyled } from './ModalStyled';
import Button from 'components/Button/Button';

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
        <CloseButton onClick={onCloseModal}>&times;</CloseButton>
        <div>
          <img src={img} alt={model} />
        </div>

        <h2>
          {make} <span>{model}</span>
        </h2>
        <p>Rental Price: {rentalPrice}</p>
        <p>Year: {year}</p>
        <p>Rental Company: {rentalCompany}</p>
        <p>Address: {address}</p>
        <p>Type: {type}</p>
        <span>Accessories and functionalities:</span>
        <p> {functionalities.join(', ')}</p>

        <a href="tel:+380730000000" target="_blank" rel="noopener noreferrer">
          <Button type="button" variant="secondary">
            Rental car
          </Button>
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
