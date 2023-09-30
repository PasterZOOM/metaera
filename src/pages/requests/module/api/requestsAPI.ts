import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { ENDPOINTS } from '@/shared/config/endpoints'
import { createSortQuery, requestDateFormat } from '@/shared/lib/helpers'

import { requestsMapper } from '../lib/requestMapper'

import type { RequestsFilters } from '../slices/requestsSlice'
import type { RequestType } from '../types/requestType'

export const requestsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_API_URL }),
  endpoints: builder => ({
    getRequests: builder.query<
      {
        items: {
          id: string
          item: RequestType
          row: string[]
        }[]
        total: number
      },
      RequestsFilters
    >({
      providesTags: ['Requests'],
      query: ({
        count,
        first_record,
        first_request_date,
        last_request_date,
        request_comment,
        sort,
        ...params
      }) => ({
        params: {
          ...createSortQuery(sort),
          ...requestDateFormat(first_request_date, last_request_date),
          _limit: count,
          _page: first_record,
          request_comment_like: request_comment,
          ...params,
        },
        url: ENDPOINTS.REQUESTS,
      }),
      transformResponse: (response: RequestType[]) => {
        const items = response.map(request => requestsMapper(request))

        return { items, total: 80 }
      },
    }),
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
