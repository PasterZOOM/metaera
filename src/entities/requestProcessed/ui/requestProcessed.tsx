import type { FC } from 'react'

import { Select } from '@mantine/core'

import { FilterWrapper } from '@/shared/ui/filterWrapper'

const data = [
  { label: 'В обработке', value: 'true' },
  { label: 'Обработана', value: 'false' },
]

type Props = {
  changeRequestProcessed: (period: boolean | null) => void
  requestProcessed: boolean | null
}

export const RequestProcessed: FC<Props> = props => {
  const { changeRequestProcessed, requestProcessed } = props

  const changeHandler = (value: string): void => {
    switch (value) {
      case 'true': {
        return changeRequestProcessed(true)
      }
      case 'false': {
        return changeRequestProcessed(false)
      }
      default: {
        return changeRequestProcessed(null)
      }
    }
  }

  return (
    <FilterWrapper title="Статус заявки">
      <Select
        clearable
        data={data}
        placeholder="Выберите период"
        value={requestProcessed ? requestProcessed.toString() : undefined}
        onChange={changeHandler}
      />
    </FilterWrapper>
  )
}
