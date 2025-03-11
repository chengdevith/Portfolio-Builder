import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fileUploadApi = createApi({
  reducerPath: "fileUploadApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_PORTIFY_ENDPOINT, // Replace with your base URL
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({
    uploadFile: build.mutation({
      query: (data) => ({
        url: "/upload/", 
        method: "POST",
        body: data,
      }),
    }),
    getFile: build.query({
      query: ()=>({
        url:  "/upload",
        method: "GET"

     })
    })
  }),
});

export const { useUploadFileMutation,useGetFileQuery } = fileUploadApi;