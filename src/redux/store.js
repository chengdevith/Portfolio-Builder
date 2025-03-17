import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { userApi } from "./services/userSlice";
import { authApi } from "./services/authSlice";
import { contactApi } from "./services/contactSlice";
import { blogApi } from "./services/blogSlice";
import { weApi } from "./services/weSlice";
import { fileUploadApi } from "./services/fileUploadApi";
import { skillApi } from "./services/skillSlice";
import { projectApi } from "./services/projectSlice";
import { serviceApi } from "./services/serviceSlice";
import { aboutMeApi } from "./services/aboutMeSlice";
import { templateFolioApi } from "./services/templateFolioSlice";
import { typeTemplateApi } from "./services/typeTemplateSlice";
import { selectTemplateApi } from "./services/selectTemplateSlice";

export const store = configureStore({
  reducer: {
    [typeTemplateApi.reducerPath]: typeTemplateApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
    [blogApi.reducerPath]: blogApi.reducer,
    [weApi.reducerPath]: weApi.reducer,
    [fileUploadApi.reducerPath]: fileUploadApi.reducer,
    [skillApi.reducerPath]:skillApi.reducer,
    [projectApi.reducerPath]:projectApi.reducer,
    [serviceApi.reducerPath]:serviceApi.reducer,
    [aboutMeApi.reducerPath]:aboutMeApi.reducer,
    [templateFolioApi.reducerPath]:templateFolioApi.reducer,
    [selectTemplateApi.reducerPath]:selectTemplateApi.reducer

  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      authApi.middleware,
      contactApi.middleware,
      blogApi.middleware,
      weApi.middleware,
      fileUploadApi.middleware,
      skillApi.middleware,
      projectApi.middleware,
      serviceApi.middleware,
      aboutMeApi.middleware,
      templateFolioApi.middleware,
      typeTemplateApi.middleware,
      selectTemplateApi.middleware
    ),
});

setupListeners(store.dispatch);
