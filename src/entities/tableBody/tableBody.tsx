import type { FC } from 'react'

import { Table } from '@mantine/core'

type Props = {
  columns: string[]
}

export const TableBody: FC<Props> = props => {
  const { columns } = props

  return (
    <Table.Tbody>
      <Table.Tr>
        {columns.map(col => (
          <Table.Td key={col}>{col}</Table.Td>
        ))}
      </Table.Tr>
    </Table.Tbody>
  )
}
