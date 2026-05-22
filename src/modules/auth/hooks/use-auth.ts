import { type SubmitHandler } from 'react-hook-form'
import { useNavigate } from '@tanstack/react-router'
import { useMutation } from '@tanstack/react-query'
import { APP_TEXT, type AuthModeType, ROUTES_PATHS } from '@shared/constants'
import { loginUser, registrationUser } from '../api/auth.api'
import {  type AuthFormFields } from '../schema/auth.schema'

export const useAuth = (mode: AuthModeType) => {
  const { register: registerMode, } = APP_TEXT.authMode
  const isRegister = mode === registerMode
  const navigate = useNavigate()

  const { mutate, isPending, isError, error, isSuccess } = useMutation({
    mutationKey: [isRegister ? 'add user' : 'user'],
    mutationFn: isRegister ? registrationUser : loginUser,
    onSuccess: (data) => {
      if (data) {
        localStorage.setItem('user', JSON.stringify(data))
      }
      navigate({ to: ROUTES_PATHS.root })
    },
  })

  const handleSubmitAuth: SubmitHandler<AuthFormFields> = (data) => {
    mutate(data)
  }

  return {
    handleSubmitAuth,
    isPending,
    isError,
    error,
    isRegister,
    isSuccess,
  }
}
