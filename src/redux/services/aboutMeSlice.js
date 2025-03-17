import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const aboutMeApi = createApi({
  reducerPath: "aboutMeApi",
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
    AddAboutMe: build.mutation({
      query: (data) => ({
        url: "/aboutme/",
        method: "POST",
        body:  data ,
      }),
    }),
    getAboutMeById: build.query({
      query : (id)=> `/${id}`
    })
   
  }),
});

export const {useAddAboutMeMutation ,useGetAboutMeByIdQuery} = aboutMeApi;
