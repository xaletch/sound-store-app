import { Favourites } from '@/pages'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_layout/favourites/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Favourites />
}
