import { createSlice } from '@reduxjs/toolkit';

import { initialState } from '../initialState';
import { getCarsCatalogThunk } from 'redux/Thunk/Thunk';


const carsSlice = createSlice({
  name: 'catalog',
  initialState,

  extraReducers: builder => {
    builder.addCase(getCarsCatalogThunk.fulfilled, (state, action) => {
        state.cars = action.payload;
      });
  },
});

export const carsReducer = carsSlice.reducer;
