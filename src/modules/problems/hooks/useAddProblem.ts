import { useMutation } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'

import type { User } from '@/shared/types'

import { ROUTES_PATHS } from '@/shared/constants'

import type { ProblemType } from '../types/problemList.type'

import { CreateProblem } from '../api/problem.api'

export const useAddProblem = (user?: User | null) => {
  const navigate = useNavigate()
  return useMutation({
    mutationKey: ['add problem'],
    mutationFn: ({ todo }: Pick<ProblemType, 'todo'>) => CreateProblem(user?.id ?? 0, todo),
    onSuccess: () => {
      navigate({ to: ROUTES_PATHS.problemList })
    },
  })
}
