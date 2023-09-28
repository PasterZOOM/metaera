import { createSlice } from '@reduxjs/toolkit'

import { DOCUMENT_TYPE } from '@/entities/documentType'
import type { ProcessingStatus } from '@/entities/recordStatus'
import { RECORD_STATUS } from '@/entities/recordStatus'
import { TAX_PERIOD } from '@/entities/taxPeriod'

import type { RecordType } from '../types/recordType.ts'
import type { PayloadAction } from '@reduxjs/toolkit'

export type ArchiveFilters = {
  count: number
  document_type: DOCUMENT_TYPE | null
  first_record: number
  first_request_date: Date | null
  last_request_date: Date | null
  record_status: ProcessingStatus
  sort: string | null
  tax_period: TAX_PERIOD | null
}

export type ArchiveStateType = { filters: ArchiveFilters; items: RecordType[] }

const initialState: ArchiveStateType = {
  filters: {
    count: 30,
    document_type: null,
    first_record: 1,
    first_request_date: null,
    last_request_date: null,
    record_status: {},
    sort: null,
    tax_period: null,
  },
  items: [
    {
      document_date: '2019-05-03',
      document_number: 'ВС-1123445',
      document_presentation: 'Счет на оплату',
      document_presentation_guid: 'asdas-qeqweq-12asd',
      document_type: DOCUMENT_TYPE.IN,
      files: [
        {
          file_name: 'downloads/dickpic.jpg',
          file_presentation: 'Первая страница счета',
        },
      ],
      organization_guid: 'ИП Иванов А.А.',
      organization_name: 'asdasd-zxzxc-adasd',
      record_comment: 'сначала рыбу ел на этой бумажке',
      record_date: '2022-01-03',
      record_status: RECORD_STATUS.FINISHED,
      record_status_comment: '',
      request_guid: 'qweq-asdasd-zxczxc',
      tax_period: TAX_PERIOD.Q1,
      tax_period_end_date: '2022-30-03',
    },
  ],
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
