import CarCard from 'components/CarCard/CarCard';

import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectFavoriteCars } from 'redux/selector';

const Favorites = () => {
  const favoriteCars = useSelector(selectFavoriteCars);
  
  return (
      <div>
        {favoriteCars?.length > 0 ? (
          favoriteCars.map(car => (
            <CarCard key={car.id} car={car}  />
          ))
        ) : (
          <span>
            Please choose the car in our <Link to="/catalog">Catalog</Link>
          </span>
        )}
      </div>
  );
};

export default Favorites;
