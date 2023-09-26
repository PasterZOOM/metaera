import type { FC } from 'react'
import { useId } from 'react'

import { Button } from '@mantine/core'

import { FilterWrapper } from '@/shared/ui/filterWrapper'

const data = [
  { label: 'Сегодня', value: '' },
  { label: 'Неделя', value: '' },
  { label: 'Месяц', value: '' },
]

export const QuickPassage: FC = () => {
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
