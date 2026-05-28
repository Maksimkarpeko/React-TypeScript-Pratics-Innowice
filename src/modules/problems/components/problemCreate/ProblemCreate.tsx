import { Button, Form, Input, Spin } from 'antd'
import { Controller, useForm, type SubmitHandler } from 'react-hook-form'

import { useAuth } from '@/modules/auth'
import { Message } from '@/shared/ui'

import type { ProblemType } from '../../types/problemList.type'

import { useAddProblem } from '../../hooks/useAddProblem'

export const ProblemCreate = () => {
  const { user } = useAuth()
  const { handleSubmit, control } = useForm<Pick<ProblemType, 'todo'>>()

  const { mutate, isError, isPending, error, isSuccess } = useAddProblem(user)

  if (isPending) {
    return <Spin />
  }

  const handleSubmitProblem: SubmitHandler<Pick<ProblemType, 'todo'>> = (data) => {
    mutate(data)
  }

  return (
    <div className='mt-10 ml-5'>
      <h1 className='text-3xl font-bold'>New Problem</h1>
      <form action='#' className='mt-5' onSubmit={handleSubmit(handleSubmitProblem)}>
        <Form.Item label={'Problem'}>
          <Controller
            control={control}
            name='todo'
            render={({ field }) => (
              <Input placeholder='Write your problem' size='medium' type={'text'} {...field} />
            )}
          />
        </Form.Item>
        <Button htmlType='submit' type='primary'>
          Create problem
        </Button>
        {isError && <Message message={error.message} mode='error' />}
        {isSuccess && <Message message='Success!' mode='success' />}
      </form>
    </div>
  )
}
