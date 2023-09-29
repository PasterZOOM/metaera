import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { ENDPOINTS } from '@/shared/config/endpoints'
import { requestDateFormat } from '@/shared/lib/helpers'

import { archiveRecordMapper } from '../lib/archiveMapper'

import type { ArchiveFilters } from '../slices/archiveSlice.ts'
import type { RecordType } from '../types/recordType'

export const archiveAPI = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_API_URL }),
  endpoints: builder => ({
    getArchive: builder.query<{ id: string; item: RecordType; row: string[] }[], ArchiveFilters>({
      query: ({ first_request_date, last_request_date, ...params }) => ({
        params: {
          ...requestDateFormat(first_request_date, last_request_date),
          ...params,
        },
        url: ENDPOINTS.ARCHIVE,
      }),
      transformResponse: (response: RecordType[]) => {
        return response.map(request => archiveRecordMapper(request))
      },
    }),
  }),
  reducerPath: 'archiveAPI',
})

export const { useGetArchiveQuery } = archiveAPI
