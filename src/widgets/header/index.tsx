import { useTelegram } from "@/app/providers/telegram";
import { HeaderButton } from "@/entities/header"
import { User } from "@/entities/user"
import { userSelector } from "@/entities/user/model/selector";
import { UserLoader } from "@/entities/user/ui/loader";
import { FullAppButton } from "@/features/full-app";
import { CreditsIcon, Logo, SupportIcon } from "@/shared/icons"
import { Loader } from "@/shared/ui";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

export const Header = () => {
  const { webApp } = useTelegram();

  const isDesktop = useMediaQuery({ minWidth: 1080 });

  const { user } = useSelector(userSelector);

  const isMobile = webApp?.platform === 'android' || webApp?.platform === 'ios';

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

  return (
    <div className="px-4">
      <div className="flex items-center gap-3 justify-between">
        <div className="w-full 380:w-auto">
          <HeaderButton href={"/faq-support"} cl={"w-8 h-8 380:w-auto 380:h-auto px-2 md:h-9 md:px-3 md:flex md:gap-3"} icon={<SupportIcon />} text={"Поддержка и FAQ"}/>
        </div>
        <Logo cl="400:w-9 400:h-9 min-w-6 h-6" />
        <div className="flex items-center gap-3">
          {user?.data ?
              <Link to={'/subscribe'} className={`text-xs md:text-base font-medium bg-green-800 py-1 h-6.5 flex items-center rounded-2xl text-yellow-100 gap-1 px-3 md:h-9 md:px-3 md:flex md:gap-3`}>
                <span><CreditsIcon /></span>
                <span>{user?.credits ? `${user.credits} ${user.subscribe || ''}` : "подписка"}</span>
              </Link>
            : 
            <Loader width={10} height={10} borderRadius={100} cl={"px-3 md:min-h-9 min-h-6.5 md:px-3 min-w-[100px] md:min-w-[130px]"} />  
          }
          {/* {!isDesktop && <User avatar={user?.data.photo_url} name={user?.data.first_name} />} */}
          {!isDesktop ? (
           user?.data.user?.first_name ? 
            <User avatar={user?.data.user?.photo_url} name={user?.data.user?.first_name} />
            : 
            <UserLoader />
          ) : null}
        </div>
      </div>
      {!isMobile && !isFull && (
        <div className="flex justify-end mt-6">
          <FullAppButton fullScreen={fullScreen}/>
        </div>
      )}
    </div>
  )
}
