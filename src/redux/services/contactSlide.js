import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactApi = createApi({
  reducerPath: "authApi",
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
    addContact: build.mutation({
      query: (data) => ({
        url: "/contacts/",
        method: "POST",
        body: { data },
      }),
    }),
    getContact: build.query({
      query: () => ({
        url: "/contacts/",
        method: "GET",
      }),
    }),
  }),
});

export const {useAddContactMutation, useGetContactQuery  } = contactApi;
