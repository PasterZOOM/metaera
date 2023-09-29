import type { FC } from 'react'

import dayjs from 'dayjs'

import { DataPicker } from '@/shared/ui/dataPicker'
import { FilterWrapper } from '@/shared/ui/filterWrapper'

type Props = {
  changeFirstRequestDate: (periodFrom?: Date) => void
  changeLastRequestDate: (periodTo?: Date) => void
  firstRequestDate?: Date
  lastRequestDate?: Date
}

export const Period: FC<Props> = props => {
  const { changeFirstRequestDate, changeLastRequestDate, firstRequestDate, lastRequestDate } = props

  return (
    <FilterWrapper title="Период">
      <DataPicker
        label="c"
        maxDate={lastRequestDate ?? dayjs().toDate()}
        value={firstRequestDate ?? null}
        onChange={date => changeFirstRequestDate(date || undefined)}
      />
      <DataPicker
        label="по"
        maxDate={dayjs().toDate()}
        minDate={firstRequestDate ?? undefined}
        value={lastRequestDate ?? null}
        onChange={date => changeLastRequestDate(date || undefined)}
      />
    </FilterWrapper>
  )
}
