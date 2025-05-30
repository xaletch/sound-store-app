import { useTelegram } from "@/app/providers/telegram";
import { User } from "@/entities/user";
import { userSelector } from "@/entities/user/model/selector";
import { UserLoader } from "@/entities/user/ui/loader";
import { FavouritesIcon, FoldersIcon, FullIcon, FullOpenBigIcon, HomeIcon, SearchIcon } from "@/shared/icons"
import { Link, useLocation } from "@tanstack/react-router"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const items = [
  {
    name: 'Главная',
    href: '/',
    paths: ['/', '/faq-support', '/subscribe', '/subscribe/payment'],
    icon: <HomeIcon />,
  },
  {
    name: 'Поиск',
    href: '/search',
    paths: ['/search'],
    icon: <SearchIcon />,
  },
  {
    name: 'Паки',
    href: '/folders',
    paths: ['/folders'],
    icon: <FoldersIcon />,
  },
  {
    name: 'Избранное',
    href: '/favourites',
    paths: ['/favourites'],
    icon: <FavouritesIcon />,
  },
]

export const DesktopNavbar = () => {
  const location = useLocation().pathname;
  const { webApp } = useTelegram();

  const { user } = useSelector(userSelector);

  const [isFull, setIsFull] = useState(webApp?.isFullscreen || false);

  useEffect(() => {
    const handleViewportChange = () => {
      setIsFull(webApp?.isFullscreen || false);
    };
  
    webApp?.onEvent("viewportChanged", handleViewportChange);
    return () => webApp?.offEvent("viewportChanged", handleViewportChange);
  }, [webApp]);

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
    <div className="w-[260px] border border-black/20 flex-shrink-0">
      <div className="h-screen sticky flex flex-col max-h-screen top-0">
        <div className="px-3 pt-20 pb-10 flex flex-col justify-between h-full">
          <div className="flex flex-col gap-4">
            {items.map((item, index) => (
              <div key={index} className={`flex flex-col rounded-xl ${item.paths.includes(location) ? 'bg-[#7cc0ab]' : ''} hover:bg-[#7cc0ab]/50 duration-300`}>
                <Link to={item.href} className="flex items-center px-2 py-1.5">
                  <div>{item.icon}</div>
                  <div className={`text-xs md:ml-3 md:text-base font-medium text-center`}>{item.name}</div>
                </Link>
              </div>
            ))}
          </div>
          <div>
            {isFull ? (
              <button className="flex w-full items-center px-2 py-1.5 text-sm font-medium text-center cursor-pointer hover:opacity-50 duration-300" onClick={exitFullScreen}>
                <span className="mr-1"><FullIcon/></span>
                Выйти из фуллскрина
              </button>
            ) : (
              <button className="flex w-full items-center px-2 py-1.5 text-sm font-medium text-center cursor-pointer hover:opacity-50 duration-300" onClick={fullScreen}>
                <span className="mr-1"><FullOpenBigIcon /></span>
                Войти в полный экран
              </button>
            )}
            <div className="mt-2 px-2">
              {user?.data.user?.first_name ? 
                <User avatar={user?.data.user?.photo_url} name={user?.data.user?.first_name} />
              : 
                <UserLoader />
              }
            </div> 
          </div>
        </div>
      </div>
    </div>
  )
}
