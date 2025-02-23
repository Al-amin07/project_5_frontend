/* eslint-disable @typescript-eslint/no-explicit-any */
import { TMessage } from "@/components/types";
import baseApi from "../baseApi";

const messageApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllMessage: builder.query({
      query: () => "/messages",
      transformResponse: (response: any) => response.data,
    }),
    createMessage: builder.mutation({
      query: (data: TMessage) => ({
        url: "/messages",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreateMessageMutation, useGetAllMessageQuery } = messageApi;
