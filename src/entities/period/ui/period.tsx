import type { FC } from 'react'

import dayjs from 'dayjs'

import { DataPicker } from '@/shared/ui/dataPicker'
import { FilterWrapper } from '@/shared/ui/filterWrapper'

type Props = {
  changeFirstRequestDate: (periodFrom: Date | null) => void
  changeLastRequestDate: (periodTo: Date | null) => void
  firstRequestDate: Date | null
  lastRequestDate: Date | null
}

export const Period: FC<Props> = props => {
  const { changeFirstRequestDate, changeLastRequestDate, firstRequestDate, lastRequestDate } = props

  return (
    <FilterWrapper title="Период">
      <DataPicker
        label="c"
        maxDate={lastRequestDate ?? dayjs().toDate()}
        value={firstRequestDate}
        onChange={changeFirstRequestDate}
      />
      <DataPicker
        label="по"
        maxDate={dayjs().toDate()}
        minDate={firstRequestDate ?? undefined}
        value={lastRequestDate}
        onChange={changeLastRequestDate}
      />
    </FilterWrapper>
  )
}
