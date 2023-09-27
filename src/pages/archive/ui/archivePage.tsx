import type { FC } from 'react'

import { Table } from '@mantine/core'

import { MainLayout } from '@/widgets/mainLayout'

export const ArchivePage: FC = () => {
  return (
    <MainLayout title="Архив заявки">
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Дата</Table.Th>
            <Table.Th>Статус</Table.Th>
            <Table.Th>Номер</Table.Th>
            <Table.Th>Тип документа</Table.Th>
            <Table.Th>Налоговый период</Table.Th>
            <Table.Th>Название организации</Table.Th>
            <Table.Th>Обновить</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td>04.04.2022</Table.Td>
            <Table.Td>стат</Table.Td>
            <Table.Td>№ 234</Table.Td>
            <Table.Td>входящий</Table.Td>
            <Table.Td>Месяц</Table.Td>
            <Table.Td>ИП Иванов И.И.</Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>
    </MainLayout>
  )
}
