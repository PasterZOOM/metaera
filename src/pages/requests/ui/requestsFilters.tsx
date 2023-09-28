import type { FC } from 'react'

import { useSelector } from 'react-redux'

import { CommentSearch } from '@/entities/commentSearch'
import { Period } from '@/entities/period'
import { QuickPassage } from '@/entities/quickPassage'

import { useAppDispatch } from '@/shared/lib/hooks'
import { AppAccordion } from '@/shared/ui/appAccordion'

import {
  getFirstRequestDate,
  getLastRequestDate,
  getRequestComment,
} from '../module/selectors/filtersSelectors'
import { recordsActions } from '../module/slices/requestsSlice.ts'

export const ArchiveFilters: FC = () => {
  const dispatch = useAppDispatch()

  const firstRequestDate = useSelector(getFirstRequestDate)
  const lastRequestDate = useSelector(getLastRequestDate)
  const requestComment = useSelector(getRequestComment)

  const changePeriodFrom = (period: Date | null): void => {
    dispatch(recordsActions.changeFilter({ first_record: 1, first_request_date: period }))
  }
  const changePeriodTo = (period: Date | null): void => {
    dispatch(recordsActions.changeFilter({ first_record: 1, last_request_date: period }))
  }
  const changeRequestComment = (comment: string | null): void => {
    dispatch(recordsActions.changeFilter({ first_record: 1, request_comment: comment }))
  }

  return (
    <AppAccordion>
      <CommentSearch changeRequestComment={changeRequestComment} requestComment={requestComment} />
      <Period
        changeFirstRequestDate={changePeriodFrom}
        changeLastRequestDate={changePeriodTo}
        firstRequestDate={firstRequestDate}
        lastRequestDate={lastRequestDate}
      />
      <QuickPassage
        changeFirstRequestDate={changePeriodFrom}
        changeLastRequestDate={changePeriodTo}
      />
    </AppAccordion>
  )
}
