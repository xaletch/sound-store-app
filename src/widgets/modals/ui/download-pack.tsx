import { ModalText } from "@/entities/modal/ui/modal-text";
import { setDownloadPackModal } from "@/entities/modals/model/slice";
import { soundSelector } from "@/entities/sound/model/selector";
import { PackDownloadButtonModal } from "@/features/sound/ui/download-button";
import { Modal } from "@/shared/ui"
import { useDispatch, useSelector } from "react-redux";

export const DownloadPackModal = () => {
  const dispatch = useDispatch();

  const { pack } = useSelector(soundSelector);

  const close = () => {
    dispatch(setDownloadPackModal(false));
  }

  return (
    <Modal close={close}>
      <ModalText>
        <p>Оформите пробную подписку и получите доступ к скачиванию сэмплов:</p>
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
