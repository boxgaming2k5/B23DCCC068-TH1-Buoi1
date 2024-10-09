import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './TodoList/todoSlice';
import imageSearchReducer from './ImageSearch/imageSearchSlice';
import colorReducer from './RandomColor/colorSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    images: imageSearchReducer,
    colors: colorReducer,
  },
});
