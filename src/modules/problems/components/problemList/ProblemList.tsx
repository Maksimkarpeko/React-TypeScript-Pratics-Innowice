import { useNavigate } from '@tanstack/react-router'
import { Button, Spin, Table } from 'antd'
import { useState } from 'react'

import { ROUTES_PATHS } from '@/shared/constants'
import { Message } from '@/shared/ui'

import { getColumns } from '../../constants/columns'
import { useProblems } from '../../hooks/useProblems.hooks'

export const ProblemList = () => {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [limitShow, setLimitShow] = useState<number>(5)
  
  const { users, problems, isError, isLoading, isUsersError, isUsersLoading, setCompleted } =
    useProblems(currentPage, limitShow)

  if (isError || isUsersError) {
    return <Message message='Problem with server!!' mode='error' />
  }

  if (isLoading && isUsersLoading) {
    return <Spin />
  }

  const columns = getColumns(users?.users || [], (id: number, currentStatus: boolean) => {
    setCompleted({ id, currentStatus })
  })

  return (
    <div className='z-0 w-[95%] ml-5'>
      <div className='flex mt-10 mb-5 justify-between items-center'>
        <h1 className='text-2xl font-bold '>
          All problems <span className='text-gray-600 opacity-40'>({problems?.total})</span>
        </h1>
        <Button onClick={() => navigate({ to: ROUTES_PATHS.problemCreate })} type='primary'>
          + Create Problem
        </Button>
      </div>
      <Table
        columns={columns}
        dataSource={problems?.todos}
        loading={isLoading}
        pagination={{
          current: currentPage,
          pageSize: limitShow,
          total: problems?.total || 0,
          showSizeChanger: true,
          pageSizeOptions: [5, 10, 30, `${problems?.total}`],
          onChange: (page, size) => {
            setCurrentPage(page)
            setLimitShow(size)
          },
        }}
        rowKey='id'
      />
    </div>
  )
}
