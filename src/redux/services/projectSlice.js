import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectApi = createApi({
  reducerPath: "projectApi",
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
    addProject: build.mutation({
      query: (data) => ({
        url: "/projects/",
        method: "POST",
        body:  data ,
      }),
    }),
    getProject: build.query({
      query: () => ({
        url: "/projects/",
        method: "GET",
      }),
    }),
    GetProjectById: build.query({
      query: (id)=> `/projects/${id}`
    })
    
  }),
});
 export const {useAddProjectMutation, useGetProjectQuery,useGetProjectByIdQuery} = projectApi