import { PropsWithChildren } from "react"

export const FoldersCardWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="grid grid-cols-3 gap-5 lg:grid-cols-4 1160:grid-cols-5 xl:grid-cols-6">{children}</div>
  )
}
