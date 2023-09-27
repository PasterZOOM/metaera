import { useMemo } from 'react'
import type { FC } from 'react'

import { Flex, Pagination, Select } from '@mantine/core'

const data = ['30', '50', '100']

type Props = {
  changePage: (value: number) => void
  changePageSize: (value: number) => void
  page: number
  pageSize: number
  totalItems: number
}

export const AppPagination: FC<Props> = props => {
  const { changePage, changePageSize, page, pageSize, totalItems } = props

  const total = useMemo(() => Math.ceil(totalItems / pageSize), [pageSize, totalItems])

  return (
    <Flex gap="sm">
      <Pagination withEdges total={total} value={page} onChange={changePage} />
      <Flex align="center" gap="sm">
        <div>Показывать:</div>
        <Select
          allowDeselect={false}
          data={data}
          placeholder="Выберите период"
          value={`${pageSize}`}
          onChange={newValue => changePageSize(newValue ? +newValue : +data[0])}
        />
      </Flex>
    </Flex>
  )
}
