import { HomePage } from '@pages/home'
import { getUserFromLocalStorage } from '@shared/utils'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/')({
  beforeLoad: () => {
    const user = getUserFromLocalStorage()

    if (!user) {
      throw redirect({ to: '/welcome' })
    }
  },
  component: () => <HomePage />,
})
