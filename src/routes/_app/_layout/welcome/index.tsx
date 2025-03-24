import { Welcome } from '@/pages'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_layout/welcome/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Welcome />
}
