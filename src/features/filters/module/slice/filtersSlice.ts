import { createSlice } from '@reduxjs/toolkit'

import type { ProcessingStatus } from '@/entities/bidStatus'
import type { DOCUMENT_TYPE } from '@/entities/documentType'
import type { SORT } from '@/entities/tableHeader'
import type { TAXABLE_PERIOD } from '@/entities/taxablePeriod'

import type { PayloadAction } from '@reduxjs/toolkit'

const PAGE_COUNTS = 30 // TODO: вынести в enum, перенести в пагинацию

export type FilterStateType = {
  bidStatuses: ProcessingStatus
  documentType: DOCUMENT_TYPE | null
  page: number
  pageSize: number
  periodFrom: Date | null
  periodTo: Date | null
  sort: SORT | null
  taxablePeriod: TAXABLE_PERIOD | null
}

const initialState: FilterStateType = {
  bidStatuses: {},
  documentType: null,
  page: 1,
  pageSize: PAGE_COUNTS,
  periodFrom: null,
  periodTo: null,
  sort: null,
  taxablePeriod: null,
}

const filtersSlice = createSlice({
  initialState,
  name: 'counter',
  reducers: {
    changeFilter: (state, action: PayloadAction<Partial<FilterStateType>>) => {
      return { ...state, ...action.payload }
    },
    clear: () => {
      return initialState
    },
  },
})

export const { actions: filtersActions } = filtersSlice
export const { reducer: filtersReducer } = filtersSlice
