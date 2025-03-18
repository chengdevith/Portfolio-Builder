import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const skillApi = createApi({
  reducerPath: "skillApi",
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
    addSkill: build.mutation({
      query: (data) => ({
        url: "/skills/",
        method: "POST",
        body:  data ,
      }),
    }),
    getSkill: build.query({
      query: () => ({
        url: "/skills/",
        method: "GET",
      }),
    }),
    getSkillById: build.query({
      query : (id)=> `/skills/${id}`
    })
  }),
});

export const {useAddSkillMutation,  useGetSkillQuery, useGetSkillByIdQuery } = skillApi;
