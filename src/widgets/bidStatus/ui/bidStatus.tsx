import type { FC } from 'react'
import { useId, useState } from 'react'

import { Button } from '@mantine/core'

import { FilterWrapper } from '@/shared/ui/filterWrapper'

enum ProcessingStatus {
  FINISHED = 'FINISHED',
  IN_PROCESS = 'IN_PROCESS',
  NEW = 'NEW',
  REJECTED = 'REJECTED',
}

const data = [
  { label: 'В обработке', value: ProcessingStatus.IN_PROCESS },
  { label: 'Обработана', value: ProcessingStatus.FINISHED },
  { label: 'Отклонена', value: ProcessingStatus.REJECTED },
]

export const BidStatus: FC = () => {
  const id = useId()
  const [activeStatus, setActiveStatus] = useState<Record<string, boolean>>({})

  const onclickHandler = (value: string): void => {
    setActiveStatus(prevState => ({ ...prevState, [value]: !prevState[value] }))
  }

  return (
    <FilterWrapper title="Статус заявки">
      {data.map(status => (
        <Button
          key={`${id}-${status.value}`}
          variant={activeStatus[status.value] ? undefined : 'default'}
          onClick={() => onclickHandler(status.value)}
        >
          {status.label}
        </Button>
      ))}
    </FilterWrapper>
  )
}
