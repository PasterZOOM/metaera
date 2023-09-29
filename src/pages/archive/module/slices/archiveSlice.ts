import { createSlice } from '@reduxjs/toolkit'

import type { DOCUMENT_TYPE } from '@/entities/documentType'
import type { RECORD_STATUS } from '@/entities/recordStatus'
import type { TAX_PERIOD } from '@/entities/taxPeriod'

import type { PayloadAction } from '@reduxjs/toolkit'

export type ArchiveFilters = {
  count: number
  document_type?: DOCUMENT_TYPE
  first_record: number
  first_request_date?: Date
  last_request_date?: Date
  record_status?: RECORD_STATUS
  sort?: string
  tax_period?: TAX_PERIOD
}

export type ArchiveStateType = { filters: ArchiveFilters }

const initialState: ArchiveStateType = {
  filters: {
    count: 30,
    first_record: 1,
  },
}

const archiveSlice = createSlice({
  initialState,
  name: 'archive',
  reducers: {
    changeFilter: (state, action: PayloadAction<Partial<ArchiveFilters>>) => {
      state.filters = { ...state.filters, ...action.payload }
    },
    clear: state => {
      state.filters = initialState.filters
    },
  },
})

export const { actions: archiveActions } = archiveSlice
export const { reducer: archiveReducer } = archiveSlice
