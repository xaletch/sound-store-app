import { PlayIcon } from "@/shared/icons"
import { SoundButton } from "./button"

export const ListenButton = () => {
  const listen = () => {

  }
  return (
    <SoundButton onClick={listen} cl={"min-w-37.5 md:w-[320px] bg-[#7CC0AB] text-[#1d1f22] hover:bg-[#7cc0ab]"}>
      <span>
        <PlayIcon />
      </span>
      <p>слушать</p>
    </SoundButton>
  )
}
