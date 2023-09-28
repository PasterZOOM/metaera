import { RoutePath } from '@/shared/config/routerConfig'

export interface SidebarItemType {
  label: string
  path: string
}

export const navbarItems: SidebarItemType[] = [
  { label: 'Журнал заявок', path: RoutePath.records },
  { label: 'Архив заявок', path: RoutePath.archive },
]
