import type { FC } from 'react'
import { useId } from 'react'

import { Button } from '@mantine/core'

import { FilterWrapper } from '@/shared/ui/filterWrapper'

import { PROCESSING_STATUS } from '../module/consts.ts'

const data = [
  { label: 'В обработке', value: PROCESSING_STATUS.IN_PROCESS },
  { label: 'Обработана', value: PROCESSING_STATUS.FINISHED },
  { label: 'Отклонена', value: PROCESSING_STATUS.REJECTED },
]

type Props = {
  bidStatuses: Record<string, boolean>
  changeBidStatuses: (bidStatuses: Record<string, boolean>) => void
}

export const BidStatus: FC<Props> = props => {
  const { bidStatuses, changeBidStatuses } = props
  const id = useId()

  const onclickHandler = (value: string): void => {
    changeBidStatuses({ ...bidStatuses, [value]: !bidStatuses[value] })
  }

  return (
    <FilterWrapper title="Статус заявки">
      {data.map(status => (
        <Button
          key={`${id}-${status.value}`}
          variant={bidStatuses[status.value] ? undefined : 'default'}
          onClick={() => onclickHandler(status.value)}
        >
          {status.label}
        </Button>
      ))}
    </FilterWrapper>
  )
}
