import { ModalText } from "@/entities/modal/ui/modal-text";
import { modalSelector } from "@/entities/modals/model/services";
import { setDownloadTrackModal } from "@/entities/modals/model/slice";
import { TrackDownloadButton } from "@/features/track/ui/track-download-button";
import { Modal } from "@/shared/ui";
import { useDispatch, useSelector } from "react-redux";

export const DownloadTrackModal = () => {
  const dispatch = useDispatch();

  const { downloadTrackData } = useSelector(modalSelector);

  const close = () => {
    dispatch(setDownloadTrackModal(false));
  }

  return (
    <Modal close={close}>
      <ModalText>
        <p>Вы потратите 1 кредит и получите доступ к скачиванию этого сэмпла:</p>
        <div className="mt-4">
          <p>{downloadTrackData?.track}</p>
          <p>{downloadTrackData?.genre}</p>
          <p>{downloadTrackData?.creator}</p>
        </div>
      </ModalText>
      <TrackDownloadButton id={downloadTrackData?.id || 0} track={downloadTrackData?.track || ''} />
    </Modal>
  )
}
