import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const serviceApi = createApi({
  reducerPath: "serviceApi",
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
    addService: build.mutation({
      query: (data) => ({
        url: "/services/",
        method: "POST",
        body:  data ,
      }),
    }),
    getService: build.query({
      query: () => ({
        url: "/services/",
        method: "GET",
      }),
    }),
    getServiceById: build.query({
      query : (id)=> `/services/${id}`
    })
  }),
});

export const {useAddServiceMutation, useGetServiceQuery,useGetServiceByIdQuery  } = serviceApi;
