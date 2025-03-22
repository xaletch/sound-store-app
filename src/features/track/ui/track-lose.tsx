import { useLazyListenTrackQuery } from "@/entities/track/model/services";
import { playerSelector } from "@/features/audio-player";
import { setCurrentPlayingId, setCurrentTime, setIsPlayer, setIsPlaying, setPlayerTrack } from "@/features/audio-player/model/slice";
import { IPlayerTrack } from "@/features/audio-player/model/types";
import { PauseIcon, PlayIcon } from "@/shared/icons"
import { useDispatch, useSelector } from "react-redux";

interface TrackLoseProps {
  id: number;
  name: string;
  packId: number;
  loved?: boolean;
  author: string;
}

export const TrackLose = ({ id, name, loved, packId, author }: TrackLoseProps) => {
  const dispatch = useDispatch();
  const [play] = useLazyListenTrackQuery();

  const { currentPlayingId, isPlaying } = useSelector(playerSelector);

  const handleSoundTrack = async () => {
    try {
      if (currentPlayingId === id && isPlaying) {
        dispatch(setIsPlaying(false));
        return;
      }

      if (currentPlayingId === id && !isPlaying) {
        dispatch(setIsPlaying(true));
        return;
      }

      const ID = id.toString();
      const res = await play({ id: ID }).unwrap();

      if (res.Link) {
        const trackData: IPlayerTrack = {
          name: name,
          creator: author || '',
          id: id,
          track: res.Link,
          loved: loved || false,
          packId: packId || 0
        };

        dispatch(setPlayerTrack(trackData));
        dispatch(setIsPlaying(true));
        dispatch(setIsPlayer(true));
        dispatch(setCurrentPlayingId(id));
        dispatch(setCurrentTime(0));
      }
    }
    catch (err) {
      console.error('Не удалось воспроизвести трек ', err);
    }
  }

  const playing = currentPlayingId === id && isPlaying;

  return (
    <button className="cursor-pointer" onClick={handleSoundTrack}>
      {playing ? <PauseIcon /> : <PlayIcon />}
    </button>
  )
}
