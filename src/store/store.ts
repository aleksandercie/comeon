import { configureStore } from '@reduxjs/toolkit';
import gamesReducer from '../feature/gameSlice';
import categoriesReducer from '../feature/categoriesSlice';
import authReducer from '../feature/authSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    games: gamesReducer,
    categories: categoriesReducer,
    auth: authReducer,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
