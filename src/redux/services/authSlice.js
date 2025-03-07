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
      query: (body) => ({
        url: "/register/",
        method: "POST",
        body,
      }),
    }),
    getVerifyCode: build.mutation({
      query: ({ email, otp_code }) => ({
        url: "/verify-otp/",
        method: "POST",
        body: { email, otp_code },
      }),
    }),
    getRequestResetPassword: build.mutation({
      query: ({ email }) => ({
        url: "/password-reset-request/",
        method: "POST",
        body: { email },
      }),
    }),
    getResetPassword: build.mutation({
      query: ({ email, otp_code, password, confirmPassword }) => ({
        url: "/password-reset/",
        method: "POST",
        body: { email, otp_code, password, confirmPassword },
      }),
    }),
  }),
});

export const {
  useGetLoginMutation,
  useGetUserProfileQuery,
  useGetRegisterMutation,
  useGetVerifyCodeMutation,
  useGetRequestResetPasswordMutation,
  useGetResetPasswordMutation,
} = authApi;
