import { HeaderButton } from "@/entities/header"
import { User } from "@/entities/user"
import { CreditsIcon, Logo, SupportIcon } from "@/shared/icons"

export const Header = () => {
  return (
    <div className="px-4">
      <div className="flex items-center gap-3 justify-between">
        <HeaderButton href={"/faq-support"} cl={"px-2"} icon={<SupportIcon />} text={"Поддержка и FAQ"}/>
        <Logo />
        <div className="flex items-center gap-3">
          <HeaderButton href={"/subscribe"} cl={"px-3"} icon={<CreditsIcon />} text={"подписка"}/>
          <User avatar={"/image/avatar.png"} name={""} />
        </div>
      </div>
    </div>
  )
}
