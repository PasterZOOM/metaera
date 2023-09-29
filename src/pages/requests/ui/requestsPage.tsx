import type { FC } from 'react'

import { Box, Loader, Table, Title } from '@mantine/core'
import { useSelector } from 'react-redux'

import { AppPagination } from '@/entities/appPagination'
import { TableBody } from '@/entities/tableBody'
import { TableHeader } from '@/entities/tableHeader'

import { useAppDispatch } from '@/shared/lib/hooks'

import { useGetRequestsQuery } from '../module/api/requestsAPI.ts'
import { getFilters } from '../module/selectors/filtersSelectors'
import { recordsActions } from '../module/slices/requestsSlice.ts'

import { DetailModalBody } from './detailModalBody'
import { ArchiveFilters } from './requestsFilters.tsx'

const columns = [
  { direction: 'date', label: 'Дата' },
  { direction: 'comment', label: 'Комментарий' },
  { direction: 'bidStatus', label: 'Статус обработки заявки' },
]

export const RequestsPage: FC = () => {
  const dispatch = useAppDispatch()

  const filters = useSelector(getFilters)

  const { data: requests, isError, isLoading } = useGetRequestsQuery(filters)

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <Box>Ошибка</Box>
  }

  if (requests) {
    const totalItems = requests.length

    const changeSort = (newSort?: string): void => {
      dispatch(recordsActions.changeFilter({ first_record: 1, sort: newSort }))
    }
    const changeCount = (newCount?: number): void => {
      dispatch(recordsActions.changeFilter({ count: newCount, first_record: 1 }))
    }
    const changeFirstRecord = (value?: number): void => {
      dispatch(recordsActions.changeFilter({ first_record: value }))
    }

    return (
      <Box>
        <Title order={1}>Журнал заявки</Title>
        <ArchiveFilters />
        <Table>
          <TableHeader changeSort={changeSort} columns={columns} sort={filters.sort} />
          <TableBody modalBody={DetailModalBody} modalTitle="Заявка" rows={requests} />
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
