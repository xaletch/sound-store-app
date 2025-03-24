import { HeaderButton } from "@/entities/header"
import { User } from "@/entities/user"
import { userSelector } from "@/entities/user/model/selector";
import { UserLoader } from "@/entities/user/ui/loader";
import { CreditsIcon, Logo, SupportIcon } from "@/shared/icons"
import { Loader } from "@/shared/ui";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

export const Header = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  const { user } = useSelector(userSelector);

  return (
    <div className="px-4">
      <div className="flex items-center gap-3 justify-between">
        <HeaderButton href={"/faq-support"} cl={"px-2 md:h-9 md:px-3 md:flex md:gap-3"} icon={<SupportIcon />} text={"Поддержка и FAQ"}/>
        <Logo />
        <div className="flex items-center gap-3">
          {user?.data ?
            <HeaderButton href={"/subscribe"} cl={"px-3 md:h-9 md:px-3 md:flex md:gap-3"} icon={<CreditsIcon />} text={user?.credits ? `${user.credits} ${user.subscribe || ''}` : "подписка"}/>
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
    </div>
  )
}
