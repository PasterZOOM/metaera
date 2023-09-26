import { useState } from 'react'
import type { FC } from 'react'

import { Select } from '@mantine/core'

import { FilterWrapper } from '@/shared/ui/filterWrapper'

enum Period {
  PERIOD_MONTH = 'PERIOD_MONTH',
  PERIOD_Q1 = 'PERIOD_Q1',
  PERIOD_Q2 = 'PERIOD_Q2',
  PERIOD_Q3 = 'PERIOD_Q3',
  PERIOD_Q4 = 'PERIOD_Q4',
  PERIOD_YEAR = 'PERIOD_YEAR',
}

const data = [
  { label: 'Месяц', value: Period.PERIOD_MONTH },
  { label: '1 квартал', value: Period.PERIOD_Q1 },
  { label: '2 квартал', value: Period.PERIOD_Q2 },
  { label: '3 квартал', value: Period.PERIOD_Q3 },
  { label: '4 квартал', value: Period.PERIOD_Q4 },
  { label: 'Год', value: Period.PERIOD_YEAR },
]

export const TaxablePeriod: FC = () => {
  const [value, setValue] = useState<Period | null>(null)

  return (
    <FilterWrapper title="Налоговый период">
      <Select data={data} value={value} onChange={newValue => setValue(newValue as Period)} />
    </FilterWrapper>
  )
}
