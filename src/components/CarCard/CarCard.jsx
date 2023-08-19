import React, { useEffect, useState } from 'react';

import ModalComponent from 'components/Modal/Modal';
import Button from 'components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
// import { selectCars, selectFavoriteCars } from 'redux/selector';
import { deleteCarFavorite, findCarFavorite } from 'redux/Slices/favoriteSlice';

import { CardListStyled, CardStyled } from './CarCardStyled';
import { ButtonHeart } from 'components/Button/ButtonHeart';
import { selectCars, selectFavoriteCars } from 'redux/selector';

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

  const carsCatalog = useSelector(selectCars);
  const favoriteCars = useSelector(selectFavoriteCars);
  const dispatch = useDispatch();

  const favouriteCar = carsCatalog.find(car => car.id === id);
  const isFavorite = favoriteCars.find(car => car.id === id);

  const [heartColor, setHeartColor] = useState(false);

  useEffect(() => {
    if (heartColor) setHeartColor(!heartColor);
  }, [heartColor]);

  const onBtnHeartClick = () => {
    setHeartColor(!heartColor);

    if (isFavorite) {
      const deleteCar = favoriteCars.filter(car => car.id !== id);
      dispatch(deleteCarFavorite(deleteCar));
      return;
    }
    dispatch(findCarFavorite(favouriteCar));
  };

  return (
    <CardListStyled>
      <CardStyled src={img} alt={model} loading="lazy" />
      <ButtonHeart
        onBtnHeartClick={onBtnHeartClick}
        heartColor={heartColor}
        isFavorite={isFavorite}
      />
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
      

      {isModalOpen && (
        <ModalComponent car={car} onCloseModal={() => setIsModalOpen(false)} />
      )}
    </CardListStyled>
  );
};

export default CarCard;
