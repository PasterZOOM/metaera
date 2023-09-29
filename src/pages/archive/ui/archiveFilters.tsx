import type { FC } from 'react'

import { useSelector } from 'react-redux'

import type { DOCUMENT_TYPE } from '@/entities/documentType'
import { DocumentType } from '@/entities/documentType'
import { Period } from '@/entities/period'
import { QuickPassage } from '@/entities/quickPassage'
import type { RECORD_STATUS } from '@/entities/recordStatus'
import { RecordStatus } from '@/entities/recordStatus'
import type { TAX_PERIOD } from '@/entities/taxPeriod'
import { TaxPeriod } from '@/entities/taxPeriod'

import { useAppDispatch } from '@/shared/lib/hooks'
import { AppAccordion } from '@/shared/ui/appAccordion'

import {
  getDocumentType,
  getFirstRequestDate,
  getLastRequestDate,
  getRecordStatus,
  getTaxPeriod,
} from '../module/selectors/filtersSelectors'
import { archiveActions } from '../module/slices/archiveSlice.ts'

export const ArchiveFilters: FC = () => {
  const dispatch = useAppDispatch()

  const recordStatus = useSelector(getRecordStatus)
  const taxPeriod = useSelector(getTaxPeriod)
  const documentType = useSelector(getDocumentType)
  const firstRequestDate = useSelector(getFirstRequestDate)
  const lastRequestDate = useSelector(getLastRequestDate)

  const changeRecordStatus = (statuses?: RECORD_STATUS): void => {
    dispatch(archiveActions.changeFilter({ first_record: 1, record_status: statuses }))
  }
  const changeTaxPeriod = (period?: TAX_PERIOD): void => {
    dispatch(archiveActions.changeFilter({ first_record: 1, tax_period: period }))
  }
  const changeDocumentType = (type?: DOCUMENT_TYPE): void => {
    dispatch(archiveActions.changeFilter({ document_type: type, first_record: 1 }))
  }
  const changeFirstRequestDate = (period?: Date): void => {
    dispatch(archiveActions.changeFilter({ first_record: 1, first_request_date: period }))
  }
  const changeLastRequestDate = (period?: Date): void => {
    dispatch(archiveActions.changeFilter({ first_record: 1, last_request_date: period }))
  }

  return (
    <AppAccordion>
      <RecordStatus changeRecordStatus={changeRecordStatus} recordStatus={recordStatus} />
      <TaxPeriod changeTaxPeriod={changeTaxPeriod} taxPeriod={taxPeriod} />
      <DocumentType changeDocumentType={changeDocumentType} documentType={documentType} />
      <Period
        changeFirstRequestDate={changeFirstRequestDate}
        changeLastRequestDate={changeLastRequestDate}
        firstRequestDate={firstRequestDate}
        lastRequestDate={lastRequestDate}
      />
      <QuickPassage
        changeFirstRequestDate={changeFirstRequestDate}
        changeLastRequestDate={changeLastRequestDate}
      />
    </AppAccordion>
  )
}
