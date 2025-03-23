import { setDownloadTrackModal } from "@/entities/modals/model/slice";
import { Modal } from "@/shared/ui";
import { useDispatch } from "react-redux";

export const DownloadTrackModal = () => {
  const dispatch = useDispatch();

  const close = () => {
    dispatch(setDownloadTrackModal(false));
  }

  return (
    <Modal close={close}>download treck</Modal>
  )
}
