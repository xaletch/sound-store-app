import { modalSelector } from "@/entities/modals/model/services";
import { playerSelector } from "@/features/audio-player";
import { AudioPlayer, DesktopNavbar, MobileNavbar } from "@/widgets"
import { DownloadPackModal, DownloadTrackModal, LinkModal, ToTryModal } from "@/widgets/modals";
import { AnimatePresence } from "framer-motion";
import { PropsWithChildren, useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { useMediaQuery } from 'react-responsive';
import { useTelegram } from "../providers/telegram";

export const Layout = ({ children }: PropsWithChildren) => {
  const { webApp } = useTelegram();

  const [firstVisit, setFirstVisit] = useState<boolean>(true);

  const isDesktop = useMediaQuery({ minWidth: 768 });
  const { isPlayer } = useSelector(playerSelector);

  const { downloadPackModal, downloadTrackModal, linkModal, toTryModal } = useSelector(modalSelector);

  useEffect(() => {
    const firstVisit = localStorage.getItem("first-visit");
    setFirstVisit(firstVisit ? false : true);
  }, []);

  const fullScreen = () => {
    if (webApp) {
      webApp.requestFullscreen();
    }
  }

  const exitFullScreen = () => {
    if (webApp) {
      webApp.exitFullscreen();
    }
  }

  return (
    <div className="flex flex-1">
      <main className="flex flex-row relative">
        <div className="flex flex-1">
          {firstVisit && isDesktop && <DesktopNavbar />}
          <div className="flex-1 md:pb-0 pt-6 max-w-7xl mx-auto">
            <button onClick={fullScreen} className="px-3 py-2 bg-black text-white ml-10 rounded-md">Войти в полный экран</button>
            <button onClick={exitFullScreen} className="px-3 py-2 bg-black text-white ml-10 rounded-md">Выйти из полного экрана</button>
            {children}
          </div>
        </div>

        {/* navbar */}
        {firstVisit && !isDesktop && <MobileNavbar />}

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
