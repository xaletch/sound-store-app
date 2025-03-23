import { setDownloadPackModal } from "@/entities/modals/model/slice";
import { soundSelector } from "@/entities/sound/model/selector";
import { useDownloadTrackMutation } from "@/entities/track/model/services";
import { userSelector } from "@/entities/user/model/selector";
import { PlusIcon } from "@/shared/icons"
import { ModalButton } from "@/shared/ui"
import { useDispatch, useSelector } from "react-redux"

export const PackDownloadButtonModal = () => {
  const dispatch = useDispatch();

  const { user } = useSelector(userSelector);
  const { tracks } = useSelector(soundSelector);

  const [download] = useDownloadTrackMutation();

  const downloadPack = async () => {
    const totalTracks = tracks.length;
    const balance = user?.credits || 0;
    
    if (balance < totalTracks) {
      console.error('Недостаточно кредитов для покупки всех треков');
      return;
    }

    try {
      for (const track of tracks) {
        const res = await download(track.Id).unwrap();

        if (res.Link) {
          const link = document.createElement('a');
          link.href = res.Link;
          link.download = `${track.Name}.mp3`;

          document.body.appendChild(link);

          link.click();

          document.body.removeChild(link);

          console.log(`Трек ${track.Name} успешно установлен`);
        }
      }
      
      dispatch(setDownloadPackModal(false));
    }
    catch (err) {
      console.error('Не удалось установить весь пак ', err)
    }
  }
  return (
    <ModalButton onClick={downloadPack} icon={<PlusIcon />} name={"подтвердить покупку"}></ModalButton>
  )
}
