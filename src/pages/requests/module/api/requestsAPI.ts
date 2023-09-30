import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { ENDPOINTS } from '@/shared/config/endpoints'
import { requestDateFormat } from '@/shared/lib/helpers'

import { requestsMapper } from '../lib/requestMapper'

import type { RequestsFilters } from '../slices/requestsSlice'
import type { RequestType } from '../types/requestType'

export const requestsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_API_URL }),
  endpoints: builder => ({
    getRequests: builder.query<{ id: string; item: RequestType; row: string[] }[], RequestsFilters>(
      {
        providesTags: ['Requests'],
        query: ({ first_request_date, last_request_date, ...params }) => ({
          params: {
            ...requestDateFormat(first_request_date, last_request_date),
            ...params,
          },
          url: ENDPOINTS.REQUESTS,
        }),
        transformResponse: (response: RequestType[]) => {
          return response.map(request => requestsMapper(request))
        },
      },
    ),
    updateRequest: builder.mutation<
      { id: string; item: RequestType; row: string[] }[],
      Partial<RequestType>
    >({
      invalidatesTags: ['Requests'],
      query: ({ request_guid, ...body }) => ({
        body,
        method: 'PATCH',
        url: `${ENDPOINTS.REQUESTS}/${request_guid}`,
      }),
      transformResponse: (response: RequestType[]) => {
        return response.map(request => requestsMapper(request))
      },
    }),
  }),
  reducerPath: 'requestsApi',
  tagTypes: ['Requests'],
})

export const { useGetRequestsQuery, useUpdateRequestMutation } = requestsApi
