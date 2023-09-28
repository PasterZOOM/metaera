import type { FC } from 'react'
import { useId } from 'react'

import { Button } from '@mantine/core'

import { FilterWrapper } from '@/shared/ui/filterWrapper'

import { RECORD_STATUS } from '../module/consts'

const data = [
  { label: 'В обработке', value: RECORD_STATUS.IN_PROCESS },
  { label: 'Обработана', value: RECORD_STATUS.FINISHED },
  { label: 'Отклонена', value: RECORD_STATUS.REJECTED },
]

type Props = {
  changeRecordStatus: (bidStatuses: RECORD_STATUS | null) => void
  recordStatus: RECORD_STATUS | null
}

export const RecordStatus: FC<Props> = props => {
  const { changeRecordStatus, recordStatus } = props
  const id = useId()

  const onclickHandler = (value: RECORD_STATUS): void => {
    changeRecordStatus(value === recordStatus ? null : value)
  }

  return (
    <FilterWrapper title="Статус заявки">
      {data.map(status => (
        <Button
          key={`${id}-${status.value}`}
          variant={status.value === recordStatus ? undefined : 'default'}
          onClick={() => onclickHandler(status.value)}
        >
          {status.label}
        </Button>
      ))}
    </FilterWrapper>
  )
}
