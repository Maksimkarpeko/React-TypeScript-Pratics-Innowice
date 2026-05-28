import { keepPreviousData, useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import type { ResponseType } from '@/shared/types'

import { useClients } from '@/modules/clients'

import type { ProblemType } from '../types/problemList.type'

import { getProblems, updateProblemStatus } from '../api/problem.api'

export const useProblems = (currentPage: number, limitShow: number) => {
  const queryClient = useQueryClient()
  const skip = (currentPage - 1) * limitShow

  const {
    data: problems,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['problems', currentPage, limitShow],
    queryFn: () => getProblems(limitShow, skip),
    placeholderData: keepPreviousData,
  })

  const { data: users, isError: isUsersError, isLoading: isUsersLoading } = useClients()

  const { mutate: setCompleted } = useMutation({
    mutationKey: ['updateProblemStatus'],
    mutationFn: ({ id, currentStatus }: { id: number; currentStatus: boolean }) =>
      updateProblemStatus(id, currentStatus),
    onSuccess: (response) => {
      const updatedStatus = response
      queryClient.setQueryData(
        ['problems', currentPage, limitShow],
        (oldData: ResponseType<ProblemType, 'todos'>) => {
          const updatedTodos = oldData.todos.map((todo) =>
            todo.id === updatedStatus.id ? { ...todo, completed: updatedStatus.completed } : todo,
          )
          return { ...oldData, todos: updatedTodos }
        },
      )
    },
  })

  return {
    problems,
    isError,
    isLoading,
    users,
    isUsersError,
    isUsersLoading,
    setCompleted,
  }
}
