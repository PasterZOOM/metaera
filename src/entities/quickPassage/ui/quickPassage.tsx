import type { FC } from 'react'
import { useId } from 'react'

import { Button } from '@mantine/core'

import { FilterWrapper } from '@/shared/ui/filterWrapper'

const data = [
  { label: 'Сегодня', value: '1' },
  { label: 'Неделя', value: '2' },
  { label: 'Месяц', value: '3' },
]

type Props = {
  changePeriodFrom: (periodFrom: Date | null) => void
  changePeriodTo: (periodTo: Date | null) => void
}

export const QuickPassage: FC<Props> = () => {
  const id = useId()

  return (
    <FilterWrapper title="Быстрый переход">
      {data.map(status => (
        <Button key={`${id}-${status.value}`} variant="default">
          {status.label}
        </Button>
      ))}
    </FilterWrapper>
  )
}
