import type { FC } from 'react'

import { Select } from '@mantine/core'

import { FilterWrapper } from '@/shared/ui/filterWrapper'

import { TAX_PERIOD } from '../module/consts'

const data = [
  { label: 'Месяц', value: TAX_PERIOD.MONTH },
  { label: '1 квартал', value: TAX_PERIOD.Q1 },
  { label: '2 квартал', value: TAX_PERIOD.Q2 },
  { label: '3 квартал', value: TAX_PERIOD.Q3 },
  { label: '4 квартал', value: TAX_PERIOD.Q4 },
  { label: 'Год', value: TAX_PERIOD.YEAR },
]

type Props = {
  changeTaxPeriod: (period: TAX_PERIOD | null) => void
  taxPeriod: TAX_PERIOD | null
}

export const TaxPeriod: FC<Props> = props => {
  const { changeTaxPeriod, taxPeriod } = props

  return (
    <FilterWrapper title="Налоговый период">
      <Select
        clearable
        data={data}
        placeholder="Выберите период"
        value={taxPeriod}
        onChange={newValue => changeTaxPeriod(newValue as TAX_PERIOD)}
      />
    </FilterWrapper>
  )
}
