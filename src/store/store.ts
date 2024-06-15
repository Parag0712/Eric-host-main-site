import { currencySlice } from './CurrencySlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
    reducer: currencySlice.reducer,
})

const persistConfig = {
    key:'root',
    storage,
    version:1,
}
const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);

// Define the RootState type for TypeScript
export type RootState = ReturnType<typeof rootReducer>;