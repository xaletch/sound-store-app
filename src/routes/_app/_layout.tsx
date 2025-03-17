import { Layout } from '@/app/layout'
import { TelegramBackButton } from '@/features/back-button'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_layout')({
  component: () => <LayoutContent />,
})

function LayoutContent() {
  return (
    <Layout>
      <TelegramBackButton />
      <Outlet />
    </Layout>
  )
}