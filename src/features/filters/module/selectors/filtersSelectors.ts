import type { ProcessingStatus } from '@/entities/bidStatus'
import type { DOCUMENT_TYPE } from '@/entities/documentType'
import type { TAXABLE_PERIOD } from '@/entities/taxablePeriod'

import type { RootState } from '@/app'

export const getBidStatuses = (state: RootState): ProcessingStatus => state.filters.bidStatuses
export const getDocumentType = (state: RootState): DOCUMENT_TYPE | null =>
  state.filters.documentType
export const getPeriodFrom = (state: RootState): Date | null => state.filters.periodFrom
export const getPeriodTo = (state: RootState): Date | null => state.filters.periodTo
export const getTaxablePeriod = (state: RootState): TAXABLE_PERIOD | null =>
  state.filters.taxablePeriod
