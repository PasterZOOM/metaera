import type { FC } from 'react'

import { Accordion } from '@mantine/core'
import { useSelector } from 'react-redux'

import type { ProcessingStatus } from '@/entities/bidStatus'
import { BidStatus } from '@/entities/bidStatus'
import type { DOCUMENT_TYPE } from '@/entities/documentType'
import { DocumentType } from '@/entities/documentType'
import { Period } from '@/entities/period'
import { QuickPassage } from '@/entities/quickPassage'
import type { TAXABLE_PERIOD } from '@/entities/taxablePeriod'
import { TaxablePeriod } from '@/entities/taxablePeriod'

import { useAppDispatch } from '@/shared/lib/hooks'

import {
  getBidStatuses,
  getDocumentType,
  getPeriodFrom,
  getPeriodTo,
  getTaxablePeriod,
} from '../module/selectors/filtersSelectors'
import { filtersActions } from '../module/slice/filtersSlice'

export const Filters: FC = () => {
  const dispatch = useAppDispatch()

  const bidStatuses = useSelector(getBidStatuses)
  const taxablePeriod = useSelector(getTaxablePeriod)
  const documentType = useSelector(getDocumentType)
  const periodFrom = useSelector(getPeriodFrom)
  const periodTo = useSelector(getPeriodTo)

  const changeBidStatuses = (statuses: ProcessingStatus): void => {
    dispatch(filtersActions.changeFilter({ bidStatuses: statuses }))
  }
  const changeTaxablePeriod = (period: TAXABLE_PERIOD | null): void => {
    dispatch(filtersActions.changeFilter({ taxablePeriod: period }))
  }
  const changeDocumentType = (type: DOCUMENT_TYPE | null): void => {
    dispatch(filtersActions.changeFilter({ documentType: type }))
  }
  const changePeriodFrom = (period: Date | null): void => {
    dispatch(filtersActions.changeFilter({ periodFrom: period }))
  }
  const changePeriodTo = (period: Date | null): void => {
    dispatch(filtersActions.changeFilter({ periodTo: period }))
  }

  return (
    <Accordion
      styles={{
        content: { display: 'flex', flexWrap: 'wrap', gap: '0.5rem 1.5rem', width: '100%' },
        control: { display: 'flex', gap: '1rem', width: 'fit-content' },
      }}
    >
      <Accordion.Item value="filter">
        <Accordion.Control bg="transparent">Фильтр</Accordion.Control>
        <Accordion.Panel>
          <BidStatus bidStatuses={bidStatuses} changeBidStatuses={changeBidStatuses} />
          <TaxablePeriod changeTaxablePeriod={changeTaxablePeriod} taxablePeriod={taxablePeriod} />
          <DocumentType changeDocumentType={changeDocumentType} documentType={documentType} />
          <Period
            changePeriodFrom={changePeriodFrom}
            changePeriodTo={changePeriodTo}
            periodFrom={periodFrom}
            periodTo={periodTo}
          />
          <QuickPassage changePeriodFrom={changePeriodFrom} changePeriodTo={changePeriodTo} />
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  )
}
