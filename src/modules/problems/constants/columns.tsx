import { Button, Tag } from 'antd'

import type { User } from '@/shared/types'

import type { ProblemType } from '../types/problemList.type'

export const getColumns = (
  users: User[],
  setCompleted: (id: number, currentStatus: boolean) => void,
) => [
  {
    title: 'Todo',
    dataIndex: 'todo',
    key: 'todo',
  },
  {
    title: 'Status',
    dataIndex: 'completed',
    key: 'completed',
    render: (completed: boolean) => {
      const color = completed ? 'green' : 'orange'
      const text = completed ? 'Done' : 'In process'

      return <Tag color={color}>{text}</Tag>
    },
  },
  {
    title: 'User',
    dataIndex: 'userId',
    key: 'userId',
    render: (userId: number) => {
      const user = users.find((user) => user.id === userId)
      return user ? `${user.firstName} ${user.lastName}` : 'Unknown User'
    },
  },
  {
    title: 'Action',
    dataIndex: 'completed',
    key: 'completed',
    render: (currentStatus: boolean, record: ProblemType) => (
      <Button onClick={() => setCompleted(record.id, currentStatus)} type='primary'>
        {currentStatus ? 'Reopen' : 'Finish'}
      </Button>
    ),
  },
]
