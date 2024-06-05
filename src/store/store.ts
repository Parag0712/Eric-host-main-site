import { configureStore } from '@reduxjs/toolkit';
import { currencySlice } from './CurrencySlice';

export const store = configureStore({
    reducer: currencySlice.reducer,
})

export type RootState = ReturnType<typeof store.getState>;