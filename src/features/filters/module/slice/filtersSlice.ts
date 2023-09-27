import { createSlice } from '@reduxjs/toolkit'

import type { ProcessingStatus } from '@/entities/bidStatus'
import type { DOCUMENT_TYPE } from '@/entities/documentType'
import type { TAXABLE_PERIOD } from '@/entities/taxablePeriod'

import type { PayloadAction } from '@reduxjs/toolkit'

const PAGE_COUNTS = 30 // TODO: вынести в enum, перенести в пагинацию

enum Sort { // TODO: перенести в таблицы
  DATE_ASC = 'date_asc',
  DATE_DESC = 'date_desc',
}

type FilterStateType = {
  bidStatuses: ProcessingStatus
  documentType: DOCUMENT_TYPE | null
  page: number
  pageCount: number
  periodFrom: Date | null
  periodTo: Date | null
  sort: Sort | null
  taxablePeriod: TAXABLE_PERIOD | null
}

const initialState: FilterStateType = {
  bidStatuses: {},
  documentType: null,
  page: 1,
  pageCount: PAGE_COUNTS,
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
