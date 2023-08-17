import CarList from 'components/CarList/CarList';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCarsCatalogThunk } from 'redux/Thunk/Thunk';
import { selectCars } from 'redux/selector';

const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
 

  useEffect(() => {
    if (cars) return;
    dispatch(getCarsCatalogThunk());
  }, [dispatch, cars]);

  return (
    <>
      {cars && <CarList cars={cars} />}
    </>
  );
};

export default Catalog;
