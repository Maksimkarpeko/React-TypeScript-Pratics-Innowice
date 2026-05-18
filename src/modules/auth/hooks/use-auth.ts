import { useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from '@tanstack/react-router'
import { useMutation } from '@tanstack/react-query'
import { APP_TEXT } from '@shared/constants'
import { loginUser, registrationUser } from '../api/auth'
import { schema, type AuthFormFields } from '../schema/auth'

export const useAuth = (mode: string) => {
  const { auth_mode, auth } = APP_TEXT
  const { reg, login } = auth_mode
  const { fieldsLabel } = auth

  const isReg = mode === auth_mode.reg

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormFields>({
    mode: 'onChange',
    resolver: zodResolver(schema),
  })

  const navigate = useNavigate()

  const { mutate, isPending, isError, error, isSuccess } = useMutation({
    mutationKey: [isReg ? 'add user' : 'user'],
    mutationFn: isReg ? registrationUser : loginUser,
    onSuccess: () => {
      navigate({ to: '/' })
    },
  })

  const currentModeKey = isReg ? reg : login
  const currentSearchMode = isReg ? login : reg
  const current = auth[currentModeKey]

  const handleSubmitAuth: SubmitHandler<AuthFormFields> = (data) => {
    mutate(data)
  }

  return {
    current,
    handleSubmitAuth,
    fieldsLabel,
    isPending,
    isError,
    error,
    register,
    handleSubmit,
    errors,
    isReg,
    currentSearchMode,
    isSuccess,
  }
}
