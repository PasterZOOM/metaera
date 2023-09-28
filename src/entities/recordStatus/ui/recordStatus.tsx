import type { FC } from 'react'
import { useId } from 'react'

import { Button } from '@mantine/core'

import { FilterWrapper } from '@/shared/ui/filterWrapper'

import { RECORD_STATUS } from '../module/consts'

import type { ProcessingStatus } from '../module/types'

const data = [
  { label: 'В обработке', value: RECORD_STATUS.IN_PROCESS },
  { label: 'Обработана', value: RECORD_STATUS.FINISHED },
  { label: 'Отклонена', value: RECORD_STATUS.REJECTED },
]

type Props = {
  changeRecordStatus: (bidStatuses: ProcessingStatus) => void
  recordStatus: ProcessingStatus
}

export const RecordStatus: FC<Props> = props => {
  const { changeRecordStatus, recordStatus } = props
  const id = useId()

  const onclickHandler = (value: RECORD_STATUS): void => {
    changeRecordStatus({ ...recordStatus, [value]: !recordStatus[value] })
  }

  return (
    <FilterWrapper title="Статус заявки">
      {data.map(status => (
        <Button
          key={`${id}-${status.value}`}
          variant={recordStatus[status.value] ? undefined : 'default'}
          onClick={() => onclickHandler(status.value)}
        >
          {status.label}
        </Button>
      ))}
    </FilterWrapper>
  )
}
