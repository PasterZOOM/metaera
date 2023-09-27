import type { FC, ReactNode } from 'react'

import { Text } from '@mantine/core'
import { useSelector } from 'react-redux'

import { Filters, filtersActions, getPage, getPageSize } from '@/features/filters'

import { AppPagination } from '@/entities/appPagination'

import { useAppDispatch } from '@/shared/lib/hooks'

type Props = {
  children: ReactNode
  title: ReactNode
}

export const MainLayout: FC<Props> = props => {
  const { children, title } = props

  const dispatch = useAppDispatch()

  const pageSize = useSelector(getPageSize)
  const page = useSelector(getPage)

  const changePageSize = (count: number): void => {
    dispatch(filtersActions.changeFilter({ page: 1, pageSize: count }))
  }
  const changePage = (value: number): void => {
    dispatch(filtersActions.changeFilter({ page: value }))
  }

  return (
    <div>
      <Text component="h1" fw={700} size="xl">
        {title}
      </Text>

      <Filters />

      {children}
      <AppPagination
        changePage={changePage}
        changePageSize={changePageSize}
        page={page}
        pageSize={pageSize}
        totalItems={100}
      />
    </div>
  )
}
