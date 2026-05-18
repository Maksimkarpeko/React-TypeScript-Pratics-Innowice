import { HomePage } from '@pages/home'
import { getUserFromLocalStorage } from '@shared/utils/get-user-from-local-storage'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/')({
  beforeLoad: () => {
    const user = getUserFromLocalStorage()

    if (!user) {
      throw redirect({ to: '/onboarding' })
    }
  },
  component: () => <HomePage />,
})
