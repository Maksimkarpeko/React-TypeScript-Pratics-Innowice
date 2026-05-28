import type { ResponseType } from '@/shared/types'

import { customFetch } from '@/shared/utils'

import type { ProblemType } from '../types/problemList.type'

export const CreateProblem = async (userId: number, todo: string) => {
  const response = await customFetch('/todos/add', {
    method: 'POST',
    body: JSON.stringify({
      todo,
      completed: false,
      userId,
    }),
  })
  console.log(response)
  return response
}

export const getProblems = async (limit: number, skip: number) => {
  return await customFetch<ResponseType<ProblemType, 'todos'>>(`/todos?limit=${limit}&skip=${skip}`)
}

export const updateProblemStatus = async (id: number, currentStatus: boolean) => {
  return await customFetch<ProblemType>(`/todos/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ completed: !currentStatus }),
  })
}
