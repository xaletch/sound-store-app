import { PropsWithChildren } from "react"

export const FoldersCardWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="grid grid-cols-3 gap-5">{children}</div>
  )
}
