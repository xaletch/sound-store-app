import { Offer } from '@/pages/offer'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_layout/offer/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Offer />
}
