import { Payment } from '@/pages'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_layout/subscribe/payment/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Payment />
}
