import { PlayIcon } from "@/shared/icons"
import { SoundButton } from "./button"

export const ButtonTry = () => {
  return (
    <>
      <SoundButton onClick={() => {}} cl={"hover:bg-[#7cc0ab]"}>
        <span>
          <PlayIcon />
        </span>
        <p>попробовать</p>
      </SoundButton>
    </>
  )
}
