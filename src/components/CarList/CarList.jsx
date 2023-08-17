import React from 'react';

import { StyledList } from './CarListStyled';
import CarCard from 'components/CarCard/CarCard';

const CarList = ({ cars }) => {
  return (
    <StyledList>
      {cars.map(car => {
        return <CarCard key={car.id} car={car} />;
      })}
    </StyledList>
  );
};

export default CarList;
