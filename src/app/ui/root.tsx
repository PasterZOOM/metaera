import type { FC } from 'react'

import { Outlet } from 'react-router-dom'

import { Navbar } from '@/widgets/navbar'

export const Root: FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
