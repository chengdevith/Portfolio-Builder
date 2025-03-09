import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.VITE_API_PORTIFY_ENDPOINT }),
  endpoints: (build) => ({
    getAllUsers: build.query({
      query: () => "/",
    }),
    createUser: build.mutation({
      query: (data) => ({
        url: "/",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetAllUsersQuery,useCreateUserMutation } = userApi;
