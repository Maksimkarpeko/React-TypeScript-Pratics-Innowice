import { ProblemList } from '@modules/problemList'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/problemList')({
  component: () => <ProblemList />,
})
