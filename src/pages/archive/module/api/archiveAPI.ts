import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { ENDPOINTS } from '@/shared/config/endpoints'
import { createSortQuery, requestDateFormat } from '@/shared/lib/helpers'

import { archiveRecordMapper } from '../lib/archiveMapper'

import type { ArchiveFilters } from '../slices/archiveSlice.ts'
import type { RecordType } from '../types/recordType'

export const archiveAPI = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_API_URL }),
  endpoints: builder => ({
    getArchive: builder.query<
      {
        items: {
          id: string
          item: RecordType
          row: string[]
        }[]
        total: number
      },
      ArchiveFilters
    >({
      query: ({ count, first_record, first_request_date, last_request_date, sort, ...params }) => ({
        params: {
          ...createSortQuery(sort),
          ...requestDateFormat(first_request_date, last_request_date),
          ...requestDateFormat(first_request_date, last_request_date),
          _limit: count,
          _page: first_record,
          ...params,
        },
        url: ENDPOINTS.ARCHIVE,
      }),
      transformResponse: (response: RecordType[]) => {
        const items = response.map(request => archiveRecordMapper(request))
        return { items, total: 30 }
      },
    }),
  }),
  reducerPath: 'archiveAPI',
})

export const { useGetArchiveQuery } = archiveAPI
