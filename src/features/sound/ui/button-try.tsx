import { PlayIcon } from "@/shared/icons"
import { SoundButton } from "./button"

export const ButtonTry = () => {
  return (
    <>
      <SoundButton onClick={() => {}} cl={"w-37.5 md:w-[320px] hover:bg-[#7cc0ab]"}>
        <span>
          <PlayIcon />
        </span>
        <p>попробовать</p>
      </SoundButton>
    </>
  )
}
