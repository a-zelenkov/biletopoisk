import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { cartReducer } from './cart/index';
import { configureStore } from '@reduxjs/toolkit';
import { movieApi } from './movies/api';
import { cinemaApi } from './cinemas/api';
import { useDispatch } from 'react-redux';
import { movieReducer } from './movies';
import { reviewApi } from './reviews/api';

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        movies: movieReducer,
        [movieApi.reducerPath]: movieApi.reducer,
        [cinemaApi.reducerPath]: cinemaApi.reducer,
        [reviewApi.reducerPath]: reviewApi.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat([movieApi.middleware, cinemaApi.middleware, reviewApi.middleware]),
});

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

console.log(store.getState());
