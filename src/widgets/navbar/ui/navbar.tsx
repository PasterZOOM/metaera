import type { FC } from 'react'

import { Tabs } from '@mantine/core'
import { NavLink } from 'react-router-dom'

import { navbarItems } from '../model/items'

export const Navbar: FC = () => {
  return (
    <Tabs color="teal" defaultValue="first">
      <Tabs.List>
        {navbarItems.map(item => (
          <NavLink key={item.path} style={{ all: 'inherit' }} to={item.path}>
            <Tabs.Tab color="blue" value={item.path}>
              {item.label}
            </Tabs.Tab>
          </NavLink>
        ))}
      </Tabs.List>
    </Tabs>
  )
}
