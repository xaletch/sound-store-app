import { playerSelector } from "@/features/audio-player";
import { AudioPlayer, DesktopNavbar, MobileNavbar } from "@/widgets"
import { PropsWithChildren } from "react"
import { useSelector } from "react-redux";
import { useMediaQuery } from 'react-responsive';

export const Layout = ({ children }: PropsWithChildren) => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const { isPlayer } = useSelector(playerSelector);
  
  return (
    <div className="flex flex-col flex-1">
      <main className="flex flex-row relative">
        {isDesktop && <DesktopNavbar />}
        <div className="flex-1 pb-15 md:pb-0 pt-6 max-w-7xl mx-auto">
          {children}
        </div>
        {!isDesktop && <MobileNavbar />}
        {isPlayer && <AudioPlayer />}
      </main>
    </div>
  )
}
