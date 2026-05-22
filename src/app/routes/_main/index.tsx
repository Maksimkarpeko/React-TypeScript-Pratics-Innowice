import { ROUTES_PATHS } from '@shared/constants'
import { HomePage } from '@pages/home'
import { getUserFromLocalStorage } from '@shared/utils/get-user-from-local-storage'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute(`${ROUTES_PATHS.layout.main}/`)({
  beforeLoad: () => {
    const user = getUserFromLocalStorage()

    if (!user) {
      throw redirect({ to: '/welcome' })
    }
  },
  component: () => <HomePage />,
})
