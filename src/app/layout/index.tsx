import { PropsWithChildren } from "react"

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col flex-1">
      <main className="flex flex-row relative">
        <div>
          {children}
        </div>
      </main>
    </div>
  )
}
