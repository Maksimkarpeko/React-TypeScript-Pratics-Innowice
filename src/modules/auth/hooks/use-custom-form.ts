import { APP_TEXT, type AuthModeType } from '@shared/constants/app-text'
import { schema, type AuthFormFields } from '../schema/auth.schema'
import { zodResolver } from '@hookform/resolvers/zod/dist/zod.js'
import { useForm } from 'react-hook-form'

export const useCustomForm = (mode: AuthModeType) => {
  const { fieldsLabel } = APP_TEXT.auth
  const { register: registerMode, login } = APP_TEXT.authMode

  const {
    register,
    handleSubmit,
    formState: { errors: errorsForm },
    control,
  } = useForm<AuthFormFields>({
    mode: 'onChange',
    resolver: zodResolver(schema),
  })

  const isRegister = mode === registerMode
  
  const currentModeKey = isRegister ? registerMode : login
  const currentSearchMode = isRegister ? login : registerMode
  const current = APP_TEXT.auth[currentModeKey]

  return {
    fieldsLabel,
    current,
    isRegister,
    currentSearchMode,
    register,
    handleSubmit,
    errorsForm,
    control,
  }
}
