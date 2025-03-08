import { Home } from '@/pages'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_layout/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Home />
}
