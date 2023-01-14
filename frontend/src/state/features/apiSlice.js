import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: 'recipeApi',
  tagTypes: ['Register'],
  endpoints: (build) => ({
    registerUser: build.mutation({
      query: (payload) => ({
        url: 'register',
        method: 'POST',
        body: payload,
      }),
    }),
    providesTags: ['Register'],
  }),
});

export const { useRegisterUserMutation } = apiSlice;
