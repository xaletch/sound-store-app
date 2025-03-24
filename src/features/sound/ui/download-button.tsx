import { setDownloadPackModal } from "@/entities/modals/model/slice";
import { soundSelector } from "@/entities/sound/model/selector";
import { useDownloadTrackMutation } from "@/entities/track/model/services";
import { userSelector } from "@/entities/user/model/selector";
import { PlusIcon } from "@/shared/icons"
import { ModalButton } from "@/shared/ui"
import { useDispatch, useSelector } from "react-redux"

import { DownloadFileParams } from '@twa-dev/types';
import { useTelegram } from "@/app/providers/telegram";


export const PackDownloadButtonModal = () => {
  const { webApp } = useTelegram();
  const dispatch = useDispatch();

  const { user } = useSelector(userSelector);
  const { tracks } = useSelector(soundSelector);

  const [download] = useDownloadTrackMutation();
  
  const balance = user?.credits || 0;
  const totalTracks = tracks.length;

  const downloadPack = async () => {
    if (balance < totalTracks) {
      console.error('Недостаточно кредитов для покупки всех треков');
      dispatch(setDownloadPackModal(false));
      return;
    }

    console.log(window.Telegram.WebApp)
    try {
      for (const track of tracks) {
        const res = await download({ id: track.Id }).unwrap();

        console.log('download pack res', res);
        console.log('download pack track', track);

        if (res.Link) {
          const binaryData = atob(res.Link);

          const byteArray = new Uint8Array(binaryData.length);
          for (let i = 0; i < binaryData.length; i++) {
            byteArray[i] = binaryData.charCodeAt(i);
          }
  
          const blob = new Blob([byteArray], { type: 'audio/mpeg' });

          const fileUrl = window.URL.createObjectURL(blob);

          const downloadParams: DownloadFileParams = {
            url: fileUrl,
            file_name: `${track.Name}.mp3`,
          };

          webApp?.downloadFile(downloadParams);
  
          console.log(`Трек ${track.Name} успешно установлен`);
          // const link = document.createElement('a');
          // link.href = res.Link;
          // link.download = `${track.Name}.mp3`;

          // document.body.appendChild(link);

          // link.click();

          // document.body.removeChild(link);

          console.log(`Трек ${track.Name} успешно установлен`);
          dispatch(setDownloadPackModal(false));
        }
      }
    }
    catch (err) {
      console.error('Не удалось установить весь пак ', err)
    }
  }
  return (
    <ModalButton onClick={downloadPack} icon={balance >= totalTracks ? <PlusIcon /> : null} name={balance >= totalTracks ? "подтвердить покупку" : "недостаточно средств"}></ModalButton>
  )
}
