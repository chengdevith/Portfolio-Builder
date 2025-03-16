import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const templateFolioApi = createApi({
  reducerPath: "templateFolioApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_PORTIFY_ENDPOINT,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({
    createTemplateFolio: build.mutation({
      query: (data) => ({
        url: "/template-portfolios/",
        method: "POST",
        body:  data ,
      }),
    }),
    getTemplateFolio: build.query({
      query: () => ({
        url: "/template-portfolios/",
        method: "GET",
      }),
    }),
    useGetTemplateFolioById: build.query({
      query : (id)=> `/template-portfolios/${id}`
    })
  }),
});

export const {useGetTemplateFolioQuery , useCreateTemplateFolioMutation, useUseGetTemplateFolioByIdQuery   } = templateFolioApi;
