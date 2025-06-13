import { AddIcon } from "@/shared/icons"
import { SoundButton } from "./button"
import { useDispatch } from "react-redux"
import { setDownloadPackModal } from "@/entities/modals/model/slice";

export const ButtonPay = () => {
  const dispatch = useDispatch();
  const download = () => {
    dispatch(setDownloadPackModal(true));
  }
  return (
    <>
      <SoundButton onClick={download} cl={"380:px-0 px-2 380:min-w-37.5 md:w-[320px] bg-[#1D1F22] text-[#E7E4DD] hover:bg-[#7cc0ab]"}>
        <span>
          <AddIcon />
        </span>
        <p>купить весь пак</p>
      </SoundButton>
    </>
  )
}
