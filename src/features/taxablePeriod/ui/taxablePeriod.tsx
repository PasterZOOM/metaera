import type { FC } from 'react'

import { Select } from '@mantine/core'

import { FilterWrapper } from '@/shared/ui/filterWrapper'

import { TAXABLE_PERIOD } from '../module/consts'

const data = [
  { label: 'Месяц', value: TAXABLE_PERIOD.MONTH },
  { label: '1 квартал', value: TAXABLE_PERIOD.Q1 },
  { label: '2 квартал', value: TAXABLE_PERIOD.Q2 },
  { label: '3 квартал', value: TAXABLE_PERIOD.Q3 },
  { label: '4 квартал', value: TAXABLE_PERIOD.Q4 },
  { label: 'Год', value: TAXABLE_PERIOD.YEAR },
]

type Props = {
  changeTaxablePeriod: (period: TAXABLE_PERIOD | null) => void
  taxablePeriod: TAXABLE_PERIOD | null
}

export const TaxablePeriod: FC<Props> = props => {
  const { changeTaxablePeriod, taxablePeriod } = props

  return (
    <FilterWrapper title="Налоговый период">
      <Select
        data={data}
        value={taxablePeriod}
        onChange={newValue => changeTaxablePeriod(newValue as TAXABLE_PERIOD)}
      />
    </FilterWrapper>
  )
}
