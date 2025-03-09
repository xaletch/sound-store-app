import { Search } from '@/pages'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_layout/search/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Search />
}
