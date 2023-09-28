import type { FC } from 'react'

import { Box, Table, Text } from '@mantine/core'
import { useSelector } from 'react-redux'

import { AppPagination } from '@/entities/appPagination'
import { TableBody } from '@/entities/tableBody'
import { TableHeader } from '@/entities/tableHeader'

import { useAppDispatch } from '@/shared/lib/hooks'

import { requestsMapper } from '../module/lib/requestMapper'
import { getCount, getFirstRecord, getSort } from '../module/selectors/filtersSelectors'
import { getRequests } from '../module/selectors/requestsSelectors'
import { recordsActions } from '../module/slices/requestsSlice.ts'

import { ArchiveFilters } from './requestsFilters.tsx'

const columns = [
  { direction: 'date', label: 'Дата' },
  { direction: 'comment', label: 'Комментарий' },
  { direction: 'bidStatus', label: 'Статус обработки заявки' },
]

export const RequestsPage: FC = () => {
  const dispatch = useAppDispatch()

  const requests = useSelector(getRequests).map(record => requestsMapper(record))

  const totalItems = requests.length

  const sort = useSelector(getSort)
  const firstRecord = useSelector(getFirstRecord)
  const count = useSelector(getCount)

  const changeSort = (newSort: string | null): void => {
    dispatch(recordsActions.changeFilter({ first_record: 1, sort: newSort }))
  }
  const changeCount = (newCount: number): void => {
    dispatch(recordsActions.changeFilter({ count: newCount, first_record: 1 }))
  }
  const changeFirstRecord = (value: number): void => {
    dispatch(recordsActions.changeFilter({ first_record: value }))
  }

  return (
    <Box>
      <Text component="h1" fw={700} size="xl">
        Журнал заявки
      </Text>
      <ArchiveFilters />
      <Table>
        <TableHeader changeSort={changeSort} columns={columns} sort={sort} />
        <TableBody rows={requests} />
      </Table>
      {!!totalItems && (
        <AppPagination
          changePage={changeFirstRecord}
          changePageSize={changeCount}
          page={firstRecord}
          pageSize={count}
          totalItems={totalItems}
        />
      )}
    </Box>
  )
}
