import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './Slices/rootSlice';
import { carsReducer } from './Slices/carsSlice';

const store = configureStore({
    reducer: {
        catalog: carsReducer,
        root: rootReducer
    }
});
export default store;