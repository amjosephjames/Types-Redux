import myReducer from "./reduxState";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    myReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
