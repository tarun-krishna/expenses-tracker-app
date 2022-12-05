import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURI = "http://localhost:8000";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseURI }),
  endpoints: (builder) => ({
    //GET Categories
    getCategories: builder.query({
      //GET 'http://localhost:8000/api/categories
      query: () => "/api/categories",
      providesTags: ["categories"],
    }),
    //GET Labels
    getLabels: builder.query({
      //post 'http://localhost:8000/api/labels'
      query: () => "/api/labels",
      providesTags: ["transaction"],
    }),
    //add new Transaction
    addTransaction: builder.mutation({
      query: (initialTransaction) => ({
        //post 'http://localhost:8000/api/transaction'
        url: "/api/transaction",
        method: "POST",
        body: initialTransaction,
      }),
      invalidatesTags: ["transaction"],
    }),
    //Delete Transaction
    deleteTransaction: builder.mutation({
      query: (recordId) => ({
        //Delete 'http://localhost:8000/api/transaction'
        url: "/api/transaction",
        method: "DELETE",
        body: recordId,
      }),
      invalidatesTags: ["transaction"],
    }),
  }),
});

export default apiSlice;
