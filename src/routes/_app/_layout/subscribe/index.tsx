import { Subscribe } from '@/pages'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_layout/subscribe/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Subscribe />
}
