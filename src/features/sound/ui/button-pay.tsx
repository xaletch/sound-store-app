import { AddIcon } from "@/shared/icons"
import { SoundButton } from "./button"

export const ButtonPay = () => {
  return (
    <>
      <SoundButton onClick={() => {}} cl={"bg-[#1D1F22] text-[#E7E4DD] hover:bg-[#7cc0ab]"}>
        <span>
          <AddIcon />
        </span>
        <p>купить весь пак</p>
      </SoundButton>
    </>
  )
}
