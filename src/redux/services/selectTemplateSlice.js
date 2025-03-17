import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const selectTemplateApi = createApi({
    reducerPath: "selectTemplateApi",
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
        createSelectTemplate: build.mutation({
            query:({user,template})=>({
                url: "/select-templates/",
                method: "POST",
                body: {user,template}
        }),
    }),
})
});
export const{
    useCreateSelectTemplateMutation
} = selectTemplateApi