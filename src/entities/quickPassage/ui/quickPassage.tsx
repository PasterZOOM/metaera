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
  changeFirstRequestDate: (periodFrom?: Date) => void
  changeLastRequestDate: (periodTo?: Date) => void
}

export const QuickPassage: FC<Props> = props => {
  const { changeFirstRequestDate, changeLastRequestDate } = props

  const id = useId()

  const setDate = (from?: Date, to?: Date): void => {
    changeFirstRequestDate(from)
    changeLastRequestDate(to)
  }

  return (
    <FilterWrapper title="Быстрый переход">
      {data.map(period => (
        <Button
          key={`${id}-${period.value}`}
          color="orange"
          variant="outline"
          onClick={() => setDate(period.from, period.to)}
        >
          {period.label}
        </Button>
      ))}
    </FilterWrapper>
  )
}
