import { Folders } from '@/pages'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_layout/folders/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Folders />
}
