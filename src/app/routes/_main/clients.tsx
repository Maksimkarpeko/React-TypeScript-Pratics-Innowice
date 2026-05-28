import { Clients } from '@modules/clients'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/clients')({
  component: () => <Clients />,
})
