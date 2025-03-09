import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { userApi } from "./services/userSlice";
import { authApi } from "./services/authSlice";
import { contactApi } from "./services/contactSlice";
import { blogApi } from "./services/blogSlice";
import { weApi } from "./services/weSlice";
import { fileUploadApi } from "./services/fileUploadApi";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
    [blogApi.reducerPath]: contactApi.reducer,
    [weApi.reducerPath]: weApi.reducer,
    [fileUploadApi.reducerPath]: fileUploadApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      authApi.middleware,
      contactApi.middleware,
      blogApi.middleware,
      weApi.middleware,
      fileUploadApi.middleware
    ),
});

setupListeners(store.dispatch);
