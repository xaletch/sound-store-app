import { PaymentStatus } from '@/pages'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_app/_layout/subscribe/payment/status/$paymentId',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <PaymentStatus />
}
