import type { FC } from 'react'

import { DataPicker } from '@/shared/ui/dataPicker'
import { FilterWrapper } from '@/shared/ui/filterWrapper'

type Props = {
  changePeriodFrom: (periodFrom: Date | null) => void
  changePeriodTo: (periodTo: Date | null) => void
  periodFrom: Date | null
  periodTo: Date | null
}

export const Period: FC<Props> = props => {
  const { changePeriodFrom, changePeriodTo, periodFrom, periodTo } = props

  return (
    <FilterWrapper title="Период">
      <DataPicker label="c" value={periodFrom} onChange={changePeriodFrom} />
      <DataPicker label="по" value={periodTo} onChange={changePeriodTo} />
    </FilterWrapper>
  )
}
