import { PlayIcon } from "@/shared/icons"
import { SoundButton } from "./button"
import { IPlayerTrack } from "@/features/audio-player/model/types";
import { useDispatch, useSelector } from "react-redux";
import { useLazyListenTrackQuery } from "@/entities/track/model/services";
import { playerSelector } from "@/features/audio-player";
import { setCurrentPlayingId, setCurrentTime, setIsPlayer, setIsPlaying, setPlayerTrack } from "@/features/audio-player/model/slice";

interface ButtonTryProps {
  id: number;
  name: string;
  creator?: string;
}

export const ButtonTry = ({ id, name, creator }: ButtonTryProps) => {
  const dispatch = useDispatch();
  const [play] = useLazyListenTrackQuery();
  
  const { currentPlayingId, isPlaying } = useSelector(playerSelector);
  
  const handleSoundTrack = async () => {
    try {
      if (id) {
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
            creator: creator || '',
            id: id,
            track: res.Link
          };
    
          dispatch(setPlayerTrack(trackData));
          dispatch(setIsPlaying(true));
          dispatch(setIsPlayer(true));
          dispatch(setCurrentPlayingId(id));
          dispatch(setCurrentTime(0));
        }
      }
    }
    catch (err) {
      console.error('Не удалось воспроизвести трек ', err);
    }
  }

  return (
    <>
      <SoundButton onClick={handleSoundTrack} cl={"w-37.5 md:w-[320px] hover:bg-[#7cc0ab]"}>
        <span>
          <PlayIcon />
        </span>
        <p>попробовать</p>
      </SoundButton>
    </>
  )
}
