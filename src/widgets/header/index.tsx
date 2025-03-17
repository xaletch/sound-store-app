import { HeaderButton } from "@/entities/header"
import { User } from "@/entities/user"
import { CreditsIcon, Logo, SupportIcon } from "@/shared/icons"
import { useMediaQuery } from "react-responsive";

export const Header = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <div className="px-4">
      <div className="flex items-center gap-3 justify-between">
        <HeaderButton href={"/faq-support"} cl={"px-2 md:h-9 md:px-3 md:flex md:gap-3"} icon={<SupportIcon />} text={"Поддержка и FAQ"}/>
        <Logo />
        <div className="flex items-center gap-3">
          <HeaderButton href={"/subscribe"} cl={"px-3 md:h-9 md:px-3 md:flex md:gap-3"} icon={<CreditsIcon />} text={"подписка"}/>
          {!isDesktop && <User avatar={"/image/avatar.png"} name={""} />}
        </div>
      </div>
    </div>
  )
}
