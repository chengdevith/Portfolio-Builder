import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const typeTemplateApi = createApi({
    reducerPath: "typeTemplateApi",
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
    endpoints:(build) =>({
        getAllTemplates: build.query({
            query:()=>({
                url:"/templates/",
                methodL:"GET"
            })
        })
    }) 
    
})
export const {useGetAllTemplatesQuery} = typeTemplateApi