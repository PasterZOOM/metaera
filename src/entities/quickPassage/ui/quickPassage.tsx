import type { FC } from 'react'
import { useId } from 'react'

import { Button } from '@mantine/core'
import dayjs from 'dayjs'

import { FilterWrapper } from '@/shared/ui/filterWrapper'

const data = [
  { from: dayjs().toDate(), label: 'Сегодня', to: dayjs().toDate(), value: '1' },
  { from: dayjs().toDate(), label: 'Неделя', to: dayjs().subtract(1, 'week').toDate(), value: '2' },
  { from: dayjs().toDate(), label: 'Месяц', to: dayjs().subtract(1, 'month').toDate(), value: '3' },
]

type Props = {
  changePeriodFrom: (periodFrom: Date | null) => void
  changePeriodTo: (periodTo: Date | null) => void
}

export const QuickPassage: FC<Props> = props => {
  const { changePeriodFrom, changePeriodTo } = props

  const id = useId()

  const setDate = (from: Date | null, to: Date | null): void => {
    changePeriodFrom(from)
    changePeriodTo(to)
  }

  return (
    <FilterWrapper title="Быстрый переход">
      {data.map(period => (
        <Button
          key={`${id}-${period.value}`}
          variant="default"
          onClick={() => setDate(period.from, period.to)}
        >
          {period.label}
        </Button>
      ))}
    </FilterWrapper>
  )
}
