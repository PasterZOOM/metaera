import type { FC } from 'react'
import { useId } from 'react'

import { Button } from '@mantine/core'

import { FilterWrapper } from '@/shared/ui/filterWrapper'

import { PROCESSING_STATUS } from '../module/consts.ts'

import type { ProcessingStatus } from '../module/types.ts'

const data = [
  { label: 'В обработке', value: PROCESSING_STATUS.IN_PROCESS },
  { label: 'Обработана', value: PROCESSING_STATUS.FINISHED },
  { label: 'Отклонена', value: PROCESSING_STATUS.REJECTED },
]

type Props = {
  bidStatuses: ProcessingStatus
  changeBidStatuses: (bidStatuses: ProcessingStatus) => void
}

export const BidStatus: FC<Props> = props => {
  const { bidStatuses, changeBidStatuses } = props
  const id = useId()

  const onclickHandler = (value: PROCESSING_STATUS): void => {
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
