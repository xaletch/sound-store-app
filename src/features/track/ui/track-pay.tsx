import { useDownloadTrackMutation } from "@/entities/track/model/services";
import { PayIcon } from "@/shared/icons"

export const TrackPay = ({ id, track }: { id: number, track: string }) => {
  const [download] = useDownloadTrackMutation();
  
  const handleDownload = async () => {
    try {
      const res = await download({ id: id }).unwrap();

      console.log('download', res);
      if (res.Link) {
        const link = document.createElement('a');
        link.href = res.Link;
        link.download = `${track}.mp3`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
    catch (err) {
      console.error('Не удалось загрузить трек', err);
    }
  }

  return (
    <button onClick={handleDownload} className="cursor-pointer">
      <PayIcon />
    </button>
  )
}
