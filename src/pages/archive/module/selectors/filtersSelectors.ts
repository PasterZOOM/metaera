import type { DOCUMENT_TYPE } from '@/entities/documentType'
import type { RECORD_STATUS } from '@/entities/recordStatus'
import type { TAX_PERIOD } from '@/entities/taxPeriod'

import type { ArchiveFilters } from '../slices/archiveSlice'
import type { RootState } from '@/app'

export const getFilters = (state: RootState): ArchiveFilters => state.archive.filters

export const getRecordStatus = (state: RootState): RECORD_STATUS | undefined =>
  state.archive.filters.record_status
export const getDocumentType = (state: RootState): DOCUMENT_TYPE | undefined =>
  state.archive.filters.document_type
export const getFirstRequestDate = (state: RootState): Date | undefined =>
  state.archive.filters.first_request_date
export const getLastRequestDate = (state: RootState): Date | undefined =>
  state.archive.filters.last_request_date
export const getTaxPeriod = (state: RootState): TAX_PERIOD | undefined =>
  state.archive.filters.tax_period
