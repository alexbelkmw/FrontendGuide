import { configureStore } from "@reduxjs/toolkit";

export const globalStore = configureStore({
  reducer: () => {},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
