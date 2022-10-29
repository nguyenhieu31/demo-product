import { configureStore } from '@reduxjs/toolkit';
import { api } from './product/api';
import ProductReducer from './product/productSlice'
export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    product: ProductReducer, // new line
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});