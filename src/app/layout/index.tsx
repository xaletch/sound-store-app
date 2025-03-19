import { AudioPlayer, DesktopNavbar, MobileNavbar } from "@/widgets"
import { PropsWithChildren } from "react"
import { useMediaQuery } from 'react-responsive';

export const Layout = ({ children }: PropsWithChildren) => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  return (
    <div className="flex flex-col flex-1">
      <main className="flex flex-row relative">
        {isDesktop && <DesktopNavbar />}
        <div className="flex-1 pb-15 md:pb-0 pt-6 max-w-7xl mx-auto">
          {children}
        </div>
        {!isDesktop && <MobileNavbar />}
        <AudioPlayer />
      </main>
    </div>
  )
}
