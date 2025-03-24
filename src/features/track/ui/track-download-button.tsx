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
      dispatch(setDownloadTrackModal(false));
      return;
    }
    try {
      const res = await download({ id: id }).unwrap();

      if (res.Link) {
        const binaryData = atob(res.Link);
        const byteArray = new Uint8Array(binaryData.length);

        for (let i = 0; i < binaryData.length; i++) {
          byteArray[i] = binaryData.charCodeAt(i);
        }

        // const blob = new Blob([byteArray], { type: 'audio/mpeg' });
        // const fileUrl = window.URL.createObjectURL(blob);

        const fileUrl = 'https://storage.yandexcloud.net/tma-dev-bits/audio/track-62?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=YCAJEGYuKPjNlESjNCbip2Anw%2F20250324%2Fru-central1%2Fs3%2Faws4_request&X-Amz-Date=20250324T153328Z&X-Amz-Expires=3600&X-Amz-Signature=97A7A419030DF4C3DD9F2806B58915E034CD5D2914BD178F1C6549B5CD934C49&X-Amz-SignedHeaders=host'

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
