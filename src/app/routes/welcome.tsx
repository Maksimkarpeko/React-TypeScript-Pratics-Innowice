import { ROUTES_PATHS } from '@shared/constants'
import { WelcomePage } from '@pages/welcome'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(`${ROUTES_PATHS.welcome}`)({
  component: () => <WelcomePage />,
})
