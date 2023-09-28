import type { FC } from 'react'

import dayjs from 'dayjs'

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
      <DataPicker
        label="c"
        maxDate={periodTo ?? dayjs().toDate()}
        value={periodFrom}
        onChange={changePeriodFrom}
      />
      <DataPicker
        label="по"
        maxDate={dayjs().toDate()}
        minDate={periodFrom ?? undefined}
        value={periodTo}
        onChange={changePeriodTo}
      />
    </FilterWrapper>
  )
}
