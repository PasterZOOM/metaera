import type { FC } from 'react'

import { Accordion, Pagination, Table, Text } from '@mantine/core'

import { BidStatus } from '@/widgets/bidStatus'

export const ArchivePage: FC = () => {
  return (
    <div>
      <Text component="h1" fw={700} size="xl">
        Архив заявок
      </Text>
      <Accordion>
        <Accordion.Item value="item-1">
          <Accordion.Control>Фильтр</Accordion.Control>
          <Accordion.Panel>
            <BidStatus />
            <div>Налоговый период</div>
            <div>Тип документа</div>
            <div>Период</div>
            <div>Быстрый переход</div>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>

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
            <Table.Td> </Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>
      <Pagination withEdges total={1} />
    </div>
  )
}
