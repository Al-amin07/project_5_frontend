import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://project5-ten-sage.vercel.app/api",
  }),
  // baseQuery: fetchBaseQuery({ baseUrl: process.env.API_URL as string }),
  endpoints: () => ({}),
});

export default baseApi;
