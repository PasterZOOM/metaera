import type { FC, ReactNode } from 'react'

import { Group } from '@mantine/core'

type Props = {
  children: ReactNode
  title: string
}

export const FilterWrapper: FC<Props> = props => {
  const { children, title } = props
  return (
    <div>
      <div>{title}</div>
      <Group gap="xs" wrap="wrap">
        {children}
      </Group>
    </div>
  )
}
