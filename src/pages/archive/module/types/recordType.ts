import type { DOCUMENT_TYPE } from '@/entities/documentType'
import type { RECORD_STATUS } from '@/entities/recordStatus'
import type { TAX_PERIOD } from '@/entities/taxPeriod'

type RecordFileType = {
  file_name: string
  file_presentation: string
}

export type RecordType = {
  document_date: string
  document_number: string
  document_presentation: string
  document_presentation_guid: string
  document_type: DOCUMENT_TYPE

  files: RecordFileType[]

  organization_guid: string
  organization_name: string

  record_comment: string
  record_date: string
  record_status: RECORD_STATUS

  record_status_comment: string
  request_guid: string

  tax_period: TAX_PERIOD
  tax_period_end_date: string
}
