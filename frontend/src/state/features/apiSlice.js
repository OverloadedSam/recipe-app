import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: 'recipeApi',
  tagTypes: ['Register', 'Login'],
  endpoints: (build) => ({
    registerUser: build.mutation({
      query: (payload) => ({
        url: 'register',
        method: 'POST',
        body: payload,
      }),
      providesTags: ['Register'],
    }),

    loginUser: build.mutation({
      query: (payload) => ({
        url: 'login',
        method: 'POST',
        body: payload,
      }),
      providesTags: ['Login'],
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = apiSlice;
