import type { RootState } from '@/app'

export const getSort = (state: RootState): string | null => state.requests.filters.sort
export const getFirstRecord = (state: RootState): number => state.requests.filters.first_record
export const getCount = (state: RootState): number => state.requests.filters.count
export const getFirstRequestDate = (state: RootState): Date | null =>
  state.requests.filters.first_request_date
export const getLastRequestDate = (state: RootState): Date | null =>
  state.requests.filters.last_request_date
export const getRequestComment = (state: RootState): string | null =>
  state.requests.filters.request_comment
export const getRequestProcessed = (state: RootState): boolean | null =>
  state.requests.filters.request_processed
