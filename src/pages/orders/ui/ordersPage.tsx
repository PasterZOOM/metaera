import type { FC } from 'react'

import { Table } from '@mantine/core'
import { useSelector } from 'react-redux'

import { MainLayout } from '@/widgets/mainLayout'

import { filtersActions, getSort } from '@/features/filters'

import { TableBody } from '@/entities/tableBody'
import type { SORT } from '@/entities/tableHeader'
import { TableHeader } from '@/entities/tableHeader'

import { useAppDispatch } from '@/shared/lib/hooks'

const columns = [
  { direction: 'date', label: 'Дата' },
  { direction: 'comment', label: 'Комментарий' },
  { direction: 'bidStatus', label: 'Статус обработки заявки' },
]
const data = ['04.04.2022', 'блабла', 'Обработана']

export const OrdersPage: FC = () => {
  const dispatch = useAppDispatch()

  const sort = useSelector(getSort)

  const changeSort = (newSort: SORT | null): void => {
    dispatch(filtersActions.changeFilter({ sort: newSort }))
  }

  return (
    <MainLayout title="Журнал заявки">
      <Table>
        <TableHeader changeSort={changeSort} columns={columns} sort={sort} />
        <TableBody columns={data} />
      </Table>
    </MainLayout>
  )
}
