import type { FC, ReactNode } from 'react'
import { useState } from 'react'

import { Modal, Table } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

type Props<T> = {
  modalBody: FC<T>
  modalTitle: string
  rows: { id: string; item: T; row: string[] }[]
}

export const TableBody = <T extends NonNullable<unknown>>(props: Props<T>): ReactNode => {
  const { modalBody: ModalBody, modalTitle, rows } = props

  const [opened, { close, open }] = useDisclosure(false)

  const [viewElement, setViewElement] = useState<T>(null!)

  return (
    <>
      <Modal opened={opened} size="100%" title={modalTitle} onClose={close}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <ModalBody {...viewElement} />
      </Modal>
      <Table.Tbody>
        {rows.map(
          row =>
            row && (
              <Table.Tr key={row.id}>
                {row.row.map(col => (
                  <Table.Td
                    key={row.id + col}
                    styles={{ td: { cursor: 'pointer' } }}
                    onClick={() => {
                      open()
                      setViewElement(row.item)
                    }}
                  >
                    {col}
                  </Table.Td>
                ))}
              </Table.Tr>
            ),
        )}
      </Table.Tbody>
    </>
  )
}
