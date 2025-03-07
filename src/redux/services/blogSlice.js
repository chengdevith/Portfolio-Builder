import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
  reducerPath: "blogApi",
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
    addBlog: build.mutation({
      query: (data) => ({
        url: "/blogs/",
        method: "POST",
        body:  data ,
      }),
    }),
    getBlog: build.query({
      query: () => ({
        url: "/blogs/",
        method: "GET",
      }),
    }),
    getBlogByById: build.query({
      query : (id)=> `/${id}`
    })
  }),
});

export const {useGetBlogByByIdQuery, useAddBlogMutation,useGetBlogQuery  } = blogApi;
