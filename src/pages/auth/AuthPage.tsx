import { AuthForm } from '@modules/auth/AuthForm'
import { Route } from '@app/index'

export const AuthPage = () => {
  const { mode } = Route.useSearch()
  return <AuthForm key={mode} />
}
