import { AuthPage } from '@pages/auth'
import { APP_TEXT } from '@shared/constants'
import { createFileRoute } from '@tanstack/react-router'

const { auth_mode } = APP_TEXT
const { reg, login } = auth_mode

export const Route = createFileRoute('/auth')({
  component: () => <AuthPage />,
  validateSearch: (search: Record<string, unknown>) => ({
    mode: search.mode === reg ? search.mode : login,
  }),
})
