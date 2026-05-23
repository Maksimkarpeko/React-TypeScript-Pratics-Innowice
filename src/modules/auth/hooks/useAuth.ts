import { APP_TEXT, type AuthModeType, ROUTES_PATHS } from '@shared/constants'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import { type SubmitHandler } from 'react-hook-form'

import { getUserFromLocalStorage } from '@/shared/utils'

import { loginUser, registrationUser } from '../api/auth.api'
import { type AuthFormFields } from '../schema/auth.schema'

export const useAuth = (mode?: AuthModeType) => {
  const queryClient = useQueryClient()
  const { register: registerMode } = APP_TEXT.authMode
  const isRegister = mode === registerMode
  const navigate = useNavigate()

  const { mutate, isPending, isError, error, isSuccess } = useMutation({
    mutationKey: [isRegister ? 'add user' : 'user'],
    mutationFn: isRegister ? registrationUser : loginUser,
    onSuccess: (data) => {
      if (data) {
        localStorage.setItem('user', JSON.stringify(data))
        queryClient.setQueryData(['userProfile'], data)
        navigate({ to: ROUTES_PATHS.root })
      }
    },
  })

  const { data: user } = useQuery({
    queryKey: ['userProfile'],
    queryFn: getUserFromLocalStorage,
    initialData: () => getUserFromLocalStorage() ?? undefined,
    staleTime: Infinity,
  })

  const handleLogOut = () => {
    try {
      localStorage.removeItem('user')
      queryClient.setQueryData(['userProfile'], null)
      navigate({ to: ROUTES_PATHS.welcome })
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error when logging out locally:', error)
      }
      navigate({ to: ROUTES_PATHS.welcome })
    }
  }

  const handleSubmitAuth: SubmitHandler<AuthFormFields> = (data) => {
    mutate(data)
  }

  return {
    handleSubmitAuth,
    handleLogOut,
    isPending,
    isError,
    error,
    isRegister,
    isSuccess,
    user,
  }
}
