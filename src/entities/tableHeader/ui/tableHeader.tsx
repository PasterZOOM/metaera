import type { FC } from 'react'

import { Table } from '@mantine/core'
import { IconArrowDown, IconReload } from '@tabler/icons-react'

import { sortParse, sortStringify } from '../module/helpers'

type Props = {
  changeSort: (sort?: string) => void
  columns: { direction?: string; label: string }[]
  refetch: () => void
  sort?: string
}

export const TableHeader: FC<Props> = props => {
  const { changeSort, columns, refetch, sort } = props

  const activeSort = sortParse(sort)

  const onSort = (direction?: string): void => {
    let { key } = activeSort
    if (activeSort.direction !== direction) {
      key = undefined
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
                <IconArrowDown style={{ position: 'absolute', transform: 'rotate(180deg)' }} />
              ) : (
                <IconArrowDown style={{ position: 'absolute' }} />
              ))}
          </Table.Th>
        ))}
        <Table.Th styles={{ th: { cursor: 'pointer' } }} onClick={refetch}>
          <span>Обновить</span>
          <IconReload style={{ position: 'absolute' }} />
        </Table.Th>
      </Table.Tr>
    </Table.Thead>
  )
}
