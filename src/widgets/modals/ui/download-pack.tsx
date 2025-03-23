import { ModalText } from "@/entities/modal/ui/modal-text";
import { setDownloadPackModal } from "@/entities/modals/model/slice";
import { soundSelector } from "@/entities/sound/model/selector";
import { PackDownloadButtonModal } from "@/features/sound/ui/download-button";
import { Modal } from "@/shared/ui"
import { useDispatch, useSelector } from "react-redux";

export const DownloadPackModal = () => {
  const dispatch = useDispatch();

  const { pack, tracks } = useSelector(soundSelector);

  const close = () => {
    dispatch(setDownloadPackModal(false));
  }

  return (
    <Modal close={close}>
      <ModalText>
        <p>Вы потратите {tracks.length} кредитов и получите доступ к скачиванию этого сэмпл пака:</p>
        <div className="mt-4">
          <p>{pack?.Name}</p>
          <p>{pack?.Genre}</p>
          <p>{pack?.Autor}</p>
        </div>
      </ModalText>
      <PackDownloadButtonModal />
    </Modal>
  )
}
