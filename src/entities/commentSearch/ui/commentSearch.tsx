import type { ChangeEvent, FC } from 'react'
import { useEffect, useState } from 'react'

import { CloseButton, Input } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'

import { useDebounce } from '@/shared/lib/hooks'
import { FilterWrapper } from '@/shared/ui/filterWrapper'

type Props = {
  changeRequestComment: (value?: string) => void
  requestComment?: string
}

export const CommentSearch: FC<Props> = props => {
  const { changeRequestComment, requestComment } = props

  const [value, setValue] = useState<string>(requestComment ?? '')
  const debouncedValue = useDebounce<string>(value, 500)

  const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.currentTarget.value)
  }

  useEffect(() => {
    changeRequestComment(value || undefined)
    // eslint-disable-next-line
  }, [debouncedValue])

  return (
    <FilterWrapper title="Комментарий">
      <Input
        leftSection={<IconSearch size={16} />}
        placeholder="Поиск"
        rightSectionPointerEvents="all"
        value={value}
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
