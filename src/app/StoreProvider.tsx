"use client"
import { persistor, store } from '@/store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

interface StoreProviderProps {
  children: React.ReactNode;
}

export default function StoreProvider({ children }: StoreProviderProps) {
  return <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

       {children}
      </PersistGate>
       </Provider>;
}