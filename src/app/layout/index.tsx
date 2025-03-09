import { MobileNavbar } from "@/widgets"
import { PropsWithChildren } from "react"

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col flex-1">
      <main className="flex flex-row relative">
        <div className="flex-1 pb-13 px-4 pt-6">
          {children}
        </div>
        <MobileNavbar />
      </main>
    </div>
  )
}
