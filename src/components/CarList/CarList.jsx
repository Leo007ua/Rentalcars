import React, { useState } from 'react';

import { StyledList } from './CarListStyled';
import CarCard from 'components/CarCard/CarCard';

import Pagination from 'components/Pagination/Pagination';

const CarList = ({cars}) => {


  const carsPerPage = 8; 
  const [currentPage, setCurrentPage] = useState(1);
 

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  

  return (
    <div>
      <StyledList>
        {currentCars?.length && currentCars.map(car => (
          <CarCard
            key={car.id}
            car={car}
             
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
