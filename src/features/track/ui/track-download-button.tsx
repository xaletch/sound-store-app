import { useTelegram } from "@/app/providers/telegram";
import { setDownloadTrackModal } from "@/entities/modals/model/slice";
import { useDownloadTrackMutation } from "@/entities/track/model/services"
import { userSelector } from "@/entities/user/model/selector";
import { PlusIcon } from "@/shared/icons";
import { ModalButton } from "@/shared/ui";
import { DownloadFileParams } from "@twa-dev/types";
import { useDispatch, useSelector } from "react-redux";

interface TrackDownloadButtonProps {
  id: number;
  track: string;
}

export const TrackDownloadButton = ({ id, track }: TrackDownloadButtonProps) => {
  const { webApp } = useTelegram();
  const dispatch = useDispatch();
  const [download] = useDownloadTrackMutation();

  const { user } = useSelector(userSelector);

  const credits = user?.credits || 0;

  const handleDownload = async () => {
    if (credits <= 1) {
      console.error('Недостаточно средств');
      // dispatch(setDownloadTrackModal(false));
      // return;
    }
    try {
      const res = await download({ id: id }).unwrap();

      if (res.Link) {
        const binaryData = atob(res.Link);
        const byteArray = new Uint8Array(binaryData.length);

        for (let i = 0; i < binaryData.length; i++) {
          byteArray[i] = binaryData.charCodeAt(i);
        }

        const blob = new Blob([byteArray], { type: 'audio/mpeg' });
        const fileUrl = window.URL.createObjectURL(blob);

        console.log('fileUrl ======= fileUrl', fileUrl);

        const downloadParams: DownloadFileParams = {
          url: fileUrl,
          file_name: `${track}.mp3`,
        };

        webApp?.downloadFile(downloadParams);

        console.log(`трек ${track} успешно установлен`)
        dispatch(setDownloadTrackModal(false));
      }
    }
    catch (err) {
      console.error('не удалось установить трек ', err);
    }
  }

  return (
    <ModalButton icon={credits >= 1 ? <PlusIcon /> : null} name={credits >= 1 ? "подтвердить покупку" : "недостаточно средств"} onClick={handleDownload} />
  )
}
