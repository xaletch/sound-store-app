import { useLazyListenTrackQuery } from "@/entities/track/model/services";
import { PlayIcon } from "@/shared/icons"

interface TrackLoseProps {
  id: number;
}

export const TrackLose = ({ id }: TrackLoseProps) => {
  const [play] = useLazyListenTrackQuery();

  const handleSoundTrack = async () => {
    try {
      const ID = id.toString();
      const res = await play({ id: ID }).unwrap();
      console.log('message')
      console.log('res', res);
    }
    catch (err) {
      console.error('Не удалось воспроизвести трек ', err);
    }
  }

  return (
    <button className="cursor-pointer" onClick={handleSoundTrack}>
      <PlayIcon />
    </button>
  )
}
