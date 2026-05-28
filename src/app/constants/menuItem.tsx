import type { MenuProps } from 'antd'

import { Link } from '@tanstack/react-router'
import { CirclePlus, House, Table, User } from 'lucide-react'

import { ROUTES_PATHS } from '@/shared/constants'

type MenuItem = Required<MenuProps>['items'][number]

export const MenuItems: MenuItem[] = [
  {
    key: ROUTES_PATHS.root,
    label: <Link to='/'>Home</Link>,
    icon: <House />,
  },
  {
    key: ROUTES_PATHS.problemList,
    label: <Link to={ROUTES_PATHS.problemList}>Problems</Link>,
    icon: <Table />,
  },
  {
    key: ROUTES_PATHS.clients,
    label: <Link to={ROUTES_PATHS.clients}>Clients</Link>,
    icon: <User />,
  },
  {
    key: ROUTES_PATHS.problemCreate,
    label: <Link to={ROUTES_PATHS.problemCreate}>Create Problem</Link>,
    icon: <CirclePlus />,
  },
]
