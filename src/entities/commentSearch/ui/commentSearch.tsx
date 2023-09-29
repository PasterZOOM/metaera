import type { ChangeEvent, FC } from 'react'

import { CloseButton, Input } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'

import { FilterWrapper } from '@/shared/ui/filterWrapper'

type Props = {
  changeRequestComment: (value?: string) => void
  requestComment?: string
}

export const CommentSearch: FC<Props> = props => {
  const { changeRequestComment, requestComment } = props

  const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    changeRequestComment(e.currentTarget.value || undefined)
  }

  return (
    <FilterWrapper title="Комментарий">
      <Input
        leftSection={<IconSearch size={16} />}
        placeholder="Поиск"
        rightSectionPointerEvents="all"
        value={requestComment ?? ''}
        rightSection={
          <CloseButton
            aria-label="Clear input"
            style={{ display: requestComment ? undefined : 'none' }}
            onClick={() => changeRequestComment()}
          />
        }
        onChange={changeHandler}
      />
    </FilterWrapper>
  )
}
