import { AuthForm } from '@modules/auth'
import { APP_TEXT, ROUTES_PATHS } from '@shared/constants'
import { createFileRoute } from '@tanstack/react-router'

const { register, login } = APP_TEXT.authMode

export const Route = createFileRoute(`${ROUTES_PATHS.auth}`)({
  component: () => <AuthRouteForm />,
  validateSearch: (search: Record<string, unknown>) => ({
    mode: search.mode === register ? register : login,
  }),
})

const AuthRouteForm = () => {
  const { mode } = Route.useSearch()
  return <AuthForm mode={mode} key={mode} />
}
