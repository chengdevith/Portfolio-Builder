import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
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
    getLogin: build.mutation({
      query: ({ email, password }) => ({
        url: "/login/",
        method: "POST",
        body: { email, password },
      }),
    }),
    getUserProfile: build.query({
      query: () => ({
        url: "/profile/",
        method: "GET",
      }),
    }),
    getRegister: build.mutation({
      query: ({ username, email, password, confirmPassword }) => ({
        url: "/register/",
        method: "POST",
        body: { username, email, password, confirmPassword },
      }),
    }),
    getVerifyCode: build.mutation({
      query: ({ email, otp_code }) => ({
        url: "/verify-otp/",
        method: "POST",
        body: { email, otp_code },
      }),
    }),
  }),
});

export const {
  useGetLoginMutation,
  useGetUserProfileQuery,
  useGetRegisterMutation,
  useGetVerifyCodeMutation
} = authApi;
