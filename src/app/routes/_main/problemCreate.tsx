import { ProblemCreate } from '@modules/problems'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/problemCreate')({
  component: () => <ProblemCreate />,
})
