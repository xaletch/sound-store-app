import { useLazyDownloadTrackQuery } from "@/entities/track/model/services";
import { PayIcon } from "@/shared/icons"

export const TrackPay = ({ id }: { id: number }) => {
  const [download] = useLazyDownloadTrackQuery();
  
  const handleDownload = async () => {
    try {
      const res = await download({ id: id }).unwrap();

      console.log('download', res)
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
