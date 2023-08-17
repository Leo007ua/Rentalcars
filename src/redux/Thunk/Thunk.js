import { createAsyncThunk } from '@reduxjs/toolkit';
import { getApiCarsCatalog } from 'Service/appiCars';

export const getCarsCatalogThunk = createAsyncThunk(
  'catalog/getCarsCatalogThunk',
  async () => getApiCarsCatalog()
);
