import { ProblemList } from '@modules/problems'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/problemList')({
  component: () => <ProblemList />,
})
