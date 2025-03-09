import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const weApi = createApi({
  reducerPath: "weApi",
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
    addWorkExperience: build.mutation({
      query: (data) => ({
        url: "/work-experiences/",
        method: "POST",
        body:  data ,
      }),
    }),
    getWorkExperience: build.query({
      query: () => ({
        url: "/work-experiences/",
        method: "GET",
      }),
    }),
    
  }),
});
 export const {useAddWorkExperienceMutation, useGetWorkExperienceQuery} = weApi