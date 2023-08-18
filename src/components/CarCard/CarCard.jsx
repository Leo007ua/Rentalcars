import React, { useState } from 'react';
import { CardStyled, CardListStyled, HeartButton} from './CarCardStyled';
import ModalComponent from 'components/Modal/Modal';
import Button from 'components/Button/Button';

const CarCard = ({ car, isfavorite, onToggleFavorite }) => {
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
      <CardStyled src={img} alt={model} loading="lazy"/>
      <h3>
        {make} <span>{model}</span>, {year}
      </h3>
      <p>{rentalPrice}</p>
      <p>
        {address} | {rentalCompany} | {type} | {model} | {id} |{' '}
        {functionalities[0]}
      </p>
      <Button type="button" variant="primary" onClick={handleLearnMoreClick}>
        Learn more
      </Button>
      <Button type="button" variant="no-border"
        onClick={onToggleFavorite}
        isfavorite={isfavorite ? "true" : "false"}
      >
        Favorite❤️
      </Button>

      {isModalOpen && (
        <ModalComponent car={car} onCloseModal={() => setIsModalOpen(false)} />
      )}
    </CardListStyled>
  );
};

export default CarCard;
