import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slice/counterSlice';
import todolistReducer from '../slice/todolistSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    todolist: todolistReducer
  }
})