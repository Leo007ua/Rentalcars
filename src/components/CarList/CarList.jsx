import React, { useEffect, useState } from 'react';

import { StyledList } from './CarListStyled';
import CarCard from 'components/CarCard/CarCard';
import { useSelector } from 'react-redux';
import { selectCars } from 'redux/selector';
import Pagination from 'components/Pagination/Pagination';
import Form from 'components/Form/Form';

const CarList = () => {
  const cars = useSelector(selectCars);
  const carsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [favoriteCars, setFavoriteCars] = useState([]);
  const [searchParams, setSearchParams] = useState({
    brand: '',
    year: '',
    price: '',
  });

  const [availableBrands, setAvailableBrands] = useState([]);
  const [availableYears, setAvailableYears] = useState([]);
  const [availablePrices, setAvailablePrices] = useState([]);

  useEffect(() => {
    const brands = [...new Set(cars.map(car => car.make))];
    setAvailableBrands(brands);

    const years = [...new Set(cars.map(car => car.year))];
    setAvailableYears(years);

    const prices = [
      ...new Set(cars.map(car => parseInt(car.rentalPrice.slice(1)))),
    ];
    setAvailablePrices(prices);
  }, [cars]);

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const storedFavoriteCars = localStorage.getItem('favoriteCars');
    if (storedFavoriteCars) {
      setFavoriteCars(JSON.parse(storedFavoriteCars));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favoriteCars', JSON.stringify(favoriteCars));
  }, [favoriteCars]);

  const toggleFavorite = car => {
    if (favoriteCars.includes(car)) {
      setFavoriteCars(favoriteCars.filter(favCar => favCar.id !== car.id));
    } else {
      setFavoriteCars([...favoriteCars, car]);
    }
  };

  const handleSearch = searchParams => {
    setSearchParams(searchParams);
    setCurrentPage(1);
  };

  const filterCars = car => {
    return (
      (!searchParams.brand ||
        car.make.toLowerCase().includes(searchParams.brand.toLowerCase())) &&
      (!searchParams.year || car.year === parseInt(searchParams.year)) &&
      (!searchParams.price || car.price <= parseInt(searchParams.price))
    );
  };

  const filteredCars = currentCars.filter(filterCars);

  return (
    <div>
      <Form
        availableBrands={availableBrands}
        availableYears={availableYears}
        availablePrices={availablePrices}
        onSearch={handleSearch}
      />

      <StyledList>
        {filteredCars.map(car => (
          <CarCard
            key={car.id}
            car={car}
            isfavorite={favoriteCars.includes(car)}
            onToggleFavorite={() => toggleFavorite(car)}
          />
        ))}
      </StyledList>

      <Pagination
        currentPage={currentPage}
        totalCars={filteredCars.length}
        carsPerPage={carsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default CarList;