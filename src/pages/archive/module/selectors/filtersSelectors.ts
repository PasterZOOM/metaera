import type { DOCUMENT_TYPE } from '@/entities/documentType'
import type { RECORD_STATUS } from '@/entities/recordStatus'
import type { TAX_PERIOD } from '@/entities/taxPeriod'

import type { RootState } from '@/app'

export const getRecordStatus = (state: RootState): RECORD_STATUS | null =>
  state.archive.filters.record_status
export const getDocumentType = (state: RootState): DOCUMENT_TYPE | null =>
  state.archive.filters.document_type
export const getFirstRequestDate = (state: RootState): Date | null =>
  state.archive.filters.first_request_date
export const getLastRequestDate = (state: RootState): Date | null =>
  state.archive.filters.last_request_date
export const getTaxPeriod = (state: RootState): TAX_PERIOD | null =>
  state.archive.filters.tax_period
export const getSort = (state: RootState): string | null => state.archive.filters.sort
export const getFirstRecord = (state: RootState): number => state.archive.filters.first_record
export const getCount = (state: RootState): number => state.archive.filters.count
