import type { FC } from 'react'

import { Table } from '@mantine/core'
import { IconArrowDown, IconReload } from '@tabler/icons-react'

import { sortParse, sortStringify } from '../module/helpers'

import type { SORT } from '../module/consts'

type Props = {
  changeSort: (sort: SORT | null) => void
  columns: { direction: string | null; label: string }[]
  sort: SORT | null
}

export const TableHeader: FC<Props> = props => {
  const { changeSort, columns, sort } = props

  const activeSort = sortParse(sort)

  const onSort = (direction: string | null): void => {
    let { key } = activeSort
    if (activeSort.direction !== direction) {
      key = null
    }
    const newSort = sortStringify(direction, key)
    changeSort(newSort)
  }

  return (
    <Table.Thead>
      <Table.Tr>
        {columns.map(col => (
          <Table.Th key={col.direction} onClick={() => onSort(col.direction)}>
            <span>{col.label}</span>
            {activeSort.direction === col.direction &&
              (activeSort.key === 'asc' ? (
                <IconArrowDown style={{ position: 'absolute' }} />
              ) : (
                <IconArrowDown style={{ position: 'absolute', transform: 'rotate(180deg)' }} />
              ))}
          </Table.Th>
        ))}
        <Table.Th>
          <span>Обновить</span>
          <IconReload style={{ position: 'absolute' }} />
        </Table.Th>
      </Table.Tr>
    </Table.Thead>
  )
}
