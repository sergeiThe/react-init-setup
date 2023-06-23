import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const dataApiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080',
  }),
  reducerPath: 'data',
  tagTypes: ['sensors'],

  endpoints: (builder) => ({
    fetchSensors: builder.query({
      query: () => '/sensors',
      keepUnusedDataFor: 10,
      providesTags: ['sensors'],
    }),
  }),
})
