import type { FC } from 'react'

import { Accordion } from '@mantine/core'

import { BidStatus } from '@/features/bidStatus'
import { DocumentType } from '@/features/documentType'
import { Period } from '@/features/period'
import { QuickPassage } from '@/features/quickPassage'
import { TaxablePeriod } from '@/features/taxablePeriod'

export const Filters: FC = () => {
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
          <BidStatus />
          <TaxablePeriod />
          <DocumentType />
          <Period />
          <QuickPassage />
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  )
}
