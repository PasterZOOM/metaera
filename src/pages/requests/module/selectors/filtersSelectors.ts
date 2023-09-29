import type { RequestsFilters } from '../slices/requestsSlice'
import type { RootState } from '@/app'

export const getFilters = (state: RootState): RequestsFilters => state.requests.filters

export const getFirstRequestDate = (state: RootState): Date | undefined =>
  state.requests.filters.first_request_date
export const getLastRequestDate = (state: RootState): Date | undefined =>
  state.requests.filters.last_request_date
export const getRequestComment = (state: RootState): string | undefined =>
  state.requests.filters.request_comment
export const getRequestProcessed = (state: RootState): boolean | undefined =>
  state.requests.filters.request_processed
