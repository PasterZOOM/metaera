import type { FC } from 'react'

import { Accordion, Pagination, Table, Text } from '@mantine/core'

import { Period } from '@/widgets/ period'
import { BidStatus } from '@/widgets/bidStatus'
import { QuickPassage } from '@/widgets/quickPassage'
import { TaxablePeriod } from '@/widgets/taxablePeriod'

export const ArchivePage: FC = () => {
  return (
    <div>
      <Text component="h1" fw={700} size="xl">
        Архив заявок
      </Text>
      <Accordion
        styles={{
          content: { display: 'flex', flexWrap: 'wrap', gap: '0.5rem 1.5rem', width: '100%' },
          control: { display: 'flex', gap: '1rem', width: 'fit-content' },
        }}
      >
        <Accordion.Item value="filter">
          <Accordion.Control bg="transparent">Фильтр</Accordion.Control>
          <Accordion.Panel>
            <BidStatus />
            <TaxablePeriod />
            <TaxablePeriod />
            <Period />
            <QuickPassage />
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
