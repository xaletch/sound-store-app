import { useLazyListenTrackQuery } from "@/entities/track/model/services";
import { setCurrentPlayingId, setCurrentTime, setIsPlaying, setPlayerTrack } from "@/features/audio-player/model/slice";
import { IPlayerTrack } from "@/features/audio-player/model/types";
import { useDispatch } from "react-redux";

export const useTrackPlay = () => {
  const dispatch = useDispatch();
  const [play] = useLazyListenTrackQuery();
  
  const playTrack = async (trackId: number, trackName: string, creator: string, loved?: boolean) => {
    try {
      const ID = trackId.toString();
      const res = await play({ id: ID }).unwrap();

      if (res.Link) {
        const trackData: IPlayerTrack = {
          name: trackName,
          creator: creator || '',
          id: trackId,
          track: res.Link,
          loved: loved || false,
        };

        dispatch(setPlayerTrack(trackData));
        dispatch(setIsPlaying(true));
        dispatch(setCurrentPlayingId(trackId));
        dispatch(setCurrentTime(0));
      }
    } catch (err) {
      console.error('Не удалось воспроизвести трек ', err);
    }
  };

  return { playTrack };
}
