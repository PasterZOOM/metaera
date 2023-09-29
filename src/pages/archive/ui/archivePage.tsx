import type { FC } from 'react'

import { Box, Table, Title, Loader } from '@mantine/core'
import { useSelector } from 'react-redux'

import { AppPagination } from '@/entities/appPagination'
import { TableBody } from '@/entities/tableBody'
import { TableHeader } from '@/entities/tableHeader'

import { useAppDispatch } from '@/shared/lib/hooks'

import { useGetArchiveQuery } from '../module/api/archiveAPI'
import { getFilters } from '../module/selectors/filtersSelectors'
import { archiveActions } from '../module/slices/archiveSlice'

import { ArchiveFilters } from './archiveFilters'
import { DetailModalBody } from './detailModalBody'

const columns = [
  { direction: 'document_date', label: 'Дата' },
  { direction: 'record_status', label: 'Статус' },
  { direction: 'document_number', label: 'Номер' },
  { direction: 'document_type', label: 'Тип документа' },
  { direction: 'tax_period', label: 'Налоговый период' },
  { direction: 'organization_name', label: 'Название организации' },
]

export const ArchivePage: FC = () => {
  const dispatch = useAppDispatch()

  const filters = useSelector(getFilters)

  const { data: records, isError, isLoading } = useGetArchiveQuery(filters)

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <Box>Ошибка</Box>
  }

  if (records) {
    const totalItems = records.length

    const changeSort = (newSort?: string): void => {
      dispatch(archiveActions.changeFilter({ first_record: 1, sort: newSort }))
    }
    const changeCount = (newCount?: number): void => {
      dispatch(archiveActions.changeFilter({ count: newCount, first_record: 1 }))
    }
    const changeFirstRecord = (value?: number): void => {
      dispatch(archiveActions.changeFilter({ first_record: value }))
    }

    return (
      <Box>
        <Title order={1}>Архив заявки</Title>
        <ArchiveFilters />
        <Table>
          <TableHeader changeSort={changeSort} columns={columns} sort={filters.sort} />
          <TableBody modalBody={DetailModalBody} modalTitle="Запись" rows={records} />
        </Table>
        {!!totalItems && (
          <AppPagination
            changePage={changeFirstRecord}
            changePageSize={changeCount}
            page={filters.first_record}
            pageSize={filters.count}
            totalItems={totalItems}
          />
        )}
      </Box>
    )
  }
  return null
}
