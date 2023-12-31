import { documentTypeDictionary } from '@/entities/documentType'
import { recordStatusDictionary } from '@/entities/recordStatus'
import { taxPeriodDictionary } from '@/entities/taxPeriod'

import type { RecordType } from '../types/recordType'

export const archiveRecordMapper = (
  record: RecordType,
): { id: string; item: RecordType; row: string[] } => {
  return {
    id: record.request_guid,
    item: record,
    row: [
      record.document_date,
      recordStatusDictionary[record.record_status],
      record.document_number,
      documentTypeDictionary[record.document_type],
      taxPeriodDictionary[record.tax_period],
      record.organization_name,
    ],
  }
}
