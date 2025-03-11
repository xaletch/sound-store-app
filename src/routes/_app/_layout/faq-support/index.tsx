import { FaqSupport } from '@/pages'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_layout/faq-support/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <FaqSupport />
}
