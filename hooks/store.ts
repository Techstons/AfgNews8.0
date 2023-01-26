import { configureStore } from "@reduxjs/toolkit";
import updateData from "../slices/searchSlices";

export const store = configureStore({
  reducer: {
    search: updateData,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
