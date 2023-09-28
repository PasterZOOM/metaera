import type { FC } from 'react'

import { Table } from '@mantine/core'

type Props = {
  rows: { id: string; row: string[] }[]
}

export const TableBody: FC<Props> = props => {
  const { rows } = props

  return (
    <Table.Tbody>
      {rows.map(
        row =>
          row && (
            <Table.Tr key={row.id}>
              {row.row.map(col => (
                <Table.Td key={row.id + col}>{col}</Table.Td>
              ))}
            </Table.Tr>
          ),
      )}
    </Table.Tbody>
  )
}
