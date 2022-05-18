import { configureStore } from "@reduxjs/toolkit";
import sensors from './reducers';

export const store = configureStore({
  reducer: {
    sensors,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
