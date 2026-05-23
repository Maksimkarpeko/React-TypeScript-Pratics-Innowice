import type { MenuProps } from 'antd'

import { Link } from '@tanstack/react-router'
import { House, Table, User } from 'lucide-react'

import { ROUTES_PATHS } from '@/shared/constants'

type MenuItem = Required<MenuProps>['items'][number]

export const MenuItems: MenuItem[] = [
  {
    key: 'sub1',
    label: <Link to='/'>Home</Link>,
    icon: <House />,
  },
  {
    key: 'sub2',
    label: <Link to={ROUTES_PATHS.problemList}>Problems</Link>,
    icon: <Table />,
  },
  {
    key: 'sub3',
    label: <Link to={ROUTES_PATHS.clients}>Clients</Link>,
    icon: <User />,
  },
]
