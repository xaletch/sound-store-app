import { modalSelector } from "@/entities/modals/model/services";
import { playerSelector } from "@/features/audio-player";
import { AudioPlayer, DesktopNavbar, MobileNavbar } from "@/widgets"
import { FullScreenTest } from "@/widgets/full-screen-test";
import { DownloadPackModal, DownloadTrackModal, LinkModal, ToTryModal } from "@/widgets/modals";
import { AnimatePresence } from "framer-motion";
import { PropsWithChildren, useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { useMediaQuery } from 'react-responsive';

export const Layout = ({ children }: PropsWithChildren) => {
  const [firstVisit, setFirstVisit] = useState<boolean>(true);

  const isDesktop = useMediaQuery({ minWidth: 768 });
  const { isPlayer } = useSelector(playerSelector);

  const { downloadPackModal, downloadTrackModal, linkModal, toTryModal } = useSelector(modalSelector);

  useEffect(() => {
    const firstVisit = localStorage.getItem("first-visit");
    setFirstVisit(firstVisit ? false : true);
  }, []);

  return (
    <div className="flex flex-1">
      <main className="flex flex-row relative">
        <div className="flex flex-1">
          {!firstVisit && isDesktop && <DesktopNavbar />}
          <div className="flex-1 pb-15 md:pb-0 pt-6 max-w-7xl mx-auto">
            <FullScreenTest />
            {children}
          </div>
        </div>

        {/* navbar */}
        {!firstVisit && !isDesktop && <MobileNavbar />}

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
