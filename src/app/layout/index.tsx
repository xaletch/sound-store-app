import { modalSelector } from "@/entities/modals/model/services";
import { playerSelector } from "@/features/audio-player";
import { AudioPlayer, DesktopNavbar, MobileNavbar } from "@/widgets"
import { DownloadPackModal, DownloadTrackModal, LinkModal, ToTryModal } from "@/widgets/modals";
import { AnimatePresence } from "framer-motion";
import { PropsWithChildren } from "react"
import { useSelector } from "react-redux";
import { useMediaQuery } from 'react-responsive';

export const Layout = ({ children }: PropsWithChildren) => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const { isPlayer } = useSelector(playerSelector);

  const { downloadPackModal, downloadTrackModal, linkModal, toTryModal } = useSelector(modalSelector);
  
  return (
    <div className="flex flex-col flex-1">
      <main className="flex flex-row relative">
        {isDesktop && <DesktopNavbar />}
        <div className="flex-1 pb-15 md:pb-0 pt-6 max-w-7xl mx-auto">
          {children}
        </div>

        {/* navbar */}
        {!isDesktop && <MobileNavbar />}

        {/* player */}
        {isPlayer && <AudioPlayer />}

        {/* modals */}
        <AnimatePresence>
          {downloadPackModal && <DownloadPackModal />}
          {downloadTrackModal && <DownloadTrackModal />}
          {linkModal && <LinkModal />}
          {toTryModal && <ToTryModal />}
        </AnimatePresence>
      </main>
    </div>
  )
}
