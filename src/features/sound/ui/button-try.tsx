import { PlayIcon } from "@/shared/icons"
import { SoundButton } from "./button"
import { useDispatch } from "react-redux";
import { setToTryModal } from "@/entities/modals/model/slice";

export const ButtonTry = () => {
  const dispatch = useDispatch();
  
  const handleToTry = () => {
    dispatch(setToTryModal(true));
  }

  return (
    <>
      <SoundButton onClick={handleToTry} cl={"w-37.5 md:w-[320px] hover:bg-[#7cc0ab]"}>
        <span>
          <PlayIcon />
        </span>
        <p>попробовать</p>
      </SoundButton>
    </>
  )
}
