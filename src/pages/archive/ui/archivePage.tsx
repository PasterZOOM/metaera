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
  { direction: 'bidStatus', label: 'Статус' },
  { direction: 'number', label: 'Номер' },
  { direction: 'documentType', label: 'Тип документа' },
  { direction: 'taxablePeriod', label: 'Налоговый период' },
  { direction: 'organizationName', label: 'Название организации' },
]
const data = ['04.04.2022', 'стат', '№ 234', 'входящий', 'Месяц', 'ИП Иванов И.И.']

export const ArchivePage: FC = () => {
  const dispatch = useAppDispatch()

  const sort = useSelector(getSort)

  const changeSort = (newSort: SORT | null): void => {
    dispatch(filtersActions.changeFilter({ sort: newSort }))
  }

  return (
    <MainLayout title="Архив заявки">
      <Table>
        <TableHeader changeSort={changeSort} columns={columns} sort={sort} />
        <TableBody columns={data} />
      </Table>
    </MainLayout>
  )
}
