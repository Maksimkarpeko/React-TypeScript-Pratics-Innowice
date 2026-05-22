import { createFileRoute, Outlet } from '@tanstack/react-router'
import { MainLayout } from '../components/layout/MainLayout'
import { ROUTES_PATHS } from '@shared/constants'

export const Route = createFileRoute(`${ROUTES_PATHS.layout.main}`)({
  component: () => (
    <MainLayout>
      <Outlet />
    </MainLayout>
  ),
})
