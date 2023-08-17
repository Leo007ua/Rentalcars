import React, { useState } from 'react';
import { CardContainerStyled, CardListStyled } from './CarCardStyled';
import ModalComponent from 'components/Modal/Modal';

const CarCard = ({ car }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    id,
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

  const handleLearnMoreClick = () => {
    setIsModalOpen(true);
  };

  return (
    <CardListStyled>
      <CardContainerStyled $urlimg={img} />
      <h3>
        {make} <span>{model}</span>, {year}
      </h3>
      <p>{rentalPrice}</p>
      <p>
        {address} | {rentalCompany} | {type} | {model} | {id} |{' '}
        {functionalities[0]}
      </p>
      <button type="button" onClick={handleLearnMoreClick}>
        LEARN MORE
      </button>

      {isModalOpen && (
        <ModalComponent car={car} onCloseModal={() => setIsModalOpen(false)} />
      )}
    </CardListStyled>
  );
};

export default CarCard;
