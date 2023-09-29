import { createSlice } from '@reduxjs/toolkit'

import type { PayloadAction } from '@reduxjs/toolkit'

export type RequestsFilters = {
  count: number
  first_record: number
  first_request_date?: Date
  last_request_date?: Date
  request_comment?: string
  request_processed?: boolean
  sort?: string
}

export type RecordsStateType = { filters: RequestsFilters }

const initialState: RecordsStateType = {
  filters: { count: 30, first_record: 1 },
}

const requestsSlice = createSlice({
  initialState,
  name: 'requests',
  reducers: {
    changeFilter: (state, action: PayloadAction<Partial<RequestsFilters>>) => {
      state.filters = { ...state.filters, ...action.payload }
    },
    clear: state => {
      state.filters = initialState.filters
    },
  },
})

export const { actions: recordsActions } = requestsSlice
export const { reducer: requestsReducer } = requestsSlice
