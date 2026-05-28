import { Table } from 'antd'
import { useState } from 'react'

import { getColumnsClients } from './constants/columnsClients'
import { useClients } from './hooks/useClients.hooks'

export const Clients = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [limitShow, setLimitShow] = useState<number>(5)
  const { data, isLoading } = useClients()

  if (isLoading) {
    return <div>Loading...</div>
  }
  const columns = getColumnsClients()
  return (
    <div className='mt-10 w-[90%] ml-5'>
      <div className='mt-10  mb-5'>
        <h1 className='text-2xl font-bold '>
          All Clients <span className='text-gray-600 opacity-40'>({data?.total})</span>
        </h1>
      </div>
      <Table
        columns={columns}
        dataSource={data?.users}
        pagination={{
          current: currentPage,
          pageSize: limitShow,
          total: data?.total || 0,
          showSizeChanger: true,
          pageSizeOptions: [5, 10, 30, `${data?.total}`],
          onChange: (page, size) => {
            setCurrentPage(page)
            setLimitShow(size)
          },
        }}
      />
    </div>
  )
}
