import { configureStore } from '@reduxjs/toolkit';
import todoReducer    from './todoSlice';
import productReducer from './productSlice';

export const store = configureStore({
  reducer: {
    todo:    todoReducer,
    product: productReducer,
  },
});