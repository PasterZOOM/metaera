import type { FC } from 'react'

import { useSelector } from 'react-redux'

import { CommentSearch } from '@/entities/commentSearch'
import { Period } from '@/entities/period'
import { QuickPassage } from '@/entities/quickPassage'
import { RequestProcessed } from '@/entities/requestProcessed'

import { useAppDispatch } from '@/shared/lib/hooks'
import { AppAccordion } from '@/shared/ui/appAccordion'

import {
  getFirstRequestDate,
  getLastRequestDate,
  getRequestComment,
  getRequestProcessed,
} from '../module/selectors/filtersSelectors'
import { recordsActions } from '../module/slices/requestsSlice.ts'

export const ArchiveFilters: FC = () => {
  const dispatch = useAppDispatch()

  const firstRequestDate = useSelector(getFirstRequestDate)
  const lastRequestDate = useSelector(getLastRequestDate)
  const requestComment = useSelector(getRequestComment)
  const requestProcessed = useSelector(getRequestProcessed)

  const changeFirstRequestDate = (period?: Date): void => {
    dispatch(recordsActions.changeFilter({ first_record: 1, first_request_date: period }))
  }
  const changeLastRequestDate = (period?: Date): void => {
    dispatch(recordsActions.changeFilter({ first_record: 1, last_request_date: period }))
  }
  const changeRequestComment = (comment?: string): void => {
    dispatch(recordsActions.changeFilter({ first_record: 1, request_comment: comment }))
  }
  const changeRequestProcessed = (processed?: boolean): void => {
    dispatch(recordsActions.changeFilter({ first_record: 1, request_processed: processed }))
  }

  return (
    <AppAccordion>
      <CommentSearch changeRequestComment={changeRequestComment} requestComment={requestComment} />
      <RequestProcessed
        changeRequestProcessed={changeRequestProcessed}
        requestProcessed={requestProcessed}
      />
      <Period
        changeFirstRequestDate={changeFirstRequestDate}
        changeLastRequestDate={changeLastRequestDate}
        firstRequestDate={firstRequestDate}
        lastRequestDate={lastRequestDate}
      />
      <QuickPassage
        changeFirstRequestDate={changeFirstRequestDate}
        changeLastRequestDate={changeLastRequestDate}
      />
    </AppAccordion>
  )
}
