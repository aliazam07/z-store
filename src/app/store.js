import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/productSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
