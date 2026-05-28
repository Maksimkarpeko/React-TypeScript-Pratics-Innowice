import type { User } from '@/shared/types'

export const getColumnsClients = () => [
  {
    title: 'Name',
    render: (_: unknown, recode: User) => {
      const fullName = `${recode.firstName} ${recode.lastName}`
      return <p>{fullName}</p>
    },
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
]
