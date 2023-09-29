import { createSlice } from '@reduxjs/toolkit'

import type { RequestType } from '../types/requestType'
import type { PayloadAction } from '@reduxjs/toolkit'

type RequestsFilters = {
  count: number
  first_record: number
  first_request_date: Date | null
  last_request_date: Date | null
  request_comment: string | null
  request_processed: boolean | null
  sort: string | null
}

export type RecordsStateType = { filters: RequestsFilters; items: RequestType[] }

const initialState: RecordsStateType = {
  filters: {
    count: 30,
    first_record: 1,
    first_request_date: null,
    last_request_date: null,
    request_comment: null,
    request_processed: null,
    sort: null,
  },
  items: [
    {
      files: [
        {
          file_data: 'UIASDOACZXCAPASDASDKKDA==',
          file_name: 'downloads/dickpic.jpg',
        },
        {
          file_data: 'QWEADDSACSDFXVXVSDASD==',
          file_name: 'pic.png',
        },
      ],
      request_comment: 'bla-bla-bla',
      request_date: '2022-01-02',
      request_guid: 'qweq-asdasd-zxczxc',
      request_processed: false,
    },
  ],
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
