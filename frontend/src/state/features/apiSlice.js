import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const userLogin = getState().auth.userLogin;
      const isLoggedIn = userLogin.isLoggedIn;
      const token = userLogin?.user?.token;

      if (isLoggedIn) headers.set('authorization', `Bearer ${token}`);

      return headers;
    },
  }),
  reducerPath: 'recipeApi',
  tagTypes: ['Register', 'Login', 'Recipes', 'Recipe'],
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

    getRecipes: build.query({
      query: () => 'recipes',
      providesTags: ['Recipes'],
    }),

    getRecipeDetails: build.query({
      query: (id) => `recipe/${id}`,
      providesTags: ['Recipe'],
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetRecipesQuery,
  useGetRecipeDetailsQuery,
} = apiSlice;
