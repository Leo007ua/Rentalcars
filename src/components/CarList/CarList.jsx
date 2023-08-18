import React, { useEffect, useState } from 'react';

import { StyledList } from './CarListStyled';
import CarCard from 'components/CarCard/CarCard';
import { useSelector } from 'react-redux';
import { selectCars } from 'redux/selector';
import Pagination from 'components/Pagination/Pagination';

const CarList = () => {
  const cars = useSelector(selectCars);
  const carsPerPage = 8; // к-ть оголошень на сторінці
  const [currentPage, setCurrentPage] = useState(1);
  const [favoriteCars, setFavoriteCars] = useState([]); // Стейт для улюблених оголошень

  // індекси початку та кінця поточної сторінки
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  // Завантаження улюблених оголошень з LocalStorage під час ініціалізації
  useEffect(() => {
    const storedFavoriteCars = localStorage.getItem('favoriteCars');
    if (storedFavoriteCars) {
      setFavoriteCars(JSON.parse(storedFavoriteCars));
    }
  }, []);

  // Збереження улюблених оголошень в LocalStorage після зміни
  useEffect(() => {
    localStorage.setItem("favoriteCars", JSON.stringify(favoriteCars));
  }, [favoriteCars]);

  // Додавання або видалення оголошення зі списку улюблених
  const toggleFavorite = (car) => {
    if (favoriteCars.includes(car)) {
      setFavoriteCars(favoriteCars.filter(favCar => favCar.id !== car.id));
    } else {
      setFavoriteCars([...favoriteCars, car]);
    }
  };

  return (
    <div>
      <StyledList>
        {currentCars.map(car => (
          <CarCard
            key={car.id}
            car={car}
            isfavorite={favoriteCars.includes(car)} // Передача інформації про улюбленість
            onToggleFavorite={() => toggleFavorite(car)} // Передача функції toggleFavorite
          />
        ))}
      </StyledList>

      <Pagination
        currentPage={currentPage}
        totalCars={cars.length}
        carsPerPage={carsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default CarList;
