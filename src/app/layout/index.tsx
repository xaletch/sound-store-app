import { TelegramBackButton } from "@/features/back-button"
import { MobileNavbar } from "@/widgets"
import { PropsWithChildren } from "react"

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col flex-1">
      <TelegramBackButton />
      <main className="flex flex-row relative">
        <div className="flex-1 pb-15 pt-6">
          {children}
        </div>
        <MobileNavbar />
      </main>
    </div>
  )
}
