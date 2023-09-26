import type { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
  title: string
}

export const FilterWrapper: FC<Props> = props => {
  const { children, title } = props
  return (
    <div>
      <div>{title}</div>
      {children}
    </div>
  )
}
