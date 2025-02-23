/* eslint-disable @typescript-eslint/no-explicit-any */
import baseApi from "../baseApi";

const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => "/blogs",
      transformResponse: (response: any) => response.data,
    }),
    getSingleBlog: builder.query({
      query: (id: string) => `/blogs/${id}`,
      transformResponse: (response: any) => response.data,
    }),
    deleteBlog: builder.mutation({
      query: (id: string) => ({
        url: `/blogs/${id}`,
        method: "DELETE",
      }),
    }),
    updateBlog: builder.mutation({
      query: (data: any) => ({
        url: `/blogs/${data.id}`,
        method: "PUT",
        body: data.data,
      }),
    }),
    createBlog: builder.mutation({
      query: (data: any) => ({ url: "/blogs", method: "POST", body: data }),
    }),
  }),
});

export const {
  useGetBlogsQuery,
  useGetSingleBlogQuery,
  useDeleteBlogMutation,
  useUpdateBlogMutation,
  useCreateBlogMutation,
} = blogApi;
