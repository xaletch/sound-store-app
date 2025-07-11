import { SamplesImage } from "@/entities/samples"
import { useGetPackPhotoQuery } from "@/entities/sound/model/services";
import { useLazyListenTrackQuery } from "@/entities/track/model/services";
import { playerSelector } from "@/features/audio-player";
import { setCurrentPlayingId, setCurrentTime, setIsPlayer, setIsPlaying, setPlayerTrack, updatePlayerTrackLoved } from "@/features/audio-player/model/slice";
import { IPlayerTrack } from "@/features/audio-player/model/types";
import { PauseIcon, PlayIcon } from "@/shared/icons";
import { useDispatch, useSelector } from "react-redux";

interface SamplesCardProps {
  image?: string;
  name: string;
  id: number;
  packId: number;
  author: string;
  loved: boolean;
}

export const SamplesCard = ({ name, id, packId, author, loved }: SamplesCardProps) => {
  const { data: photo } = useGetPackPhotoQuery({ id: packId.toString() });

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
        const isLoved = loved ?? false;

        const trackData: IPlayerTrack = {
          name: name,
          creator: author || '',
          id: id,
          track: res.Link,
          loved: isLoved,
          packId: packId || 0
        };

        dispatch(setPlayerTrack(trackData));
        dispatch(setIsPlaying(true));
        dispatch(setIsPlayer(true));
        dispatch(setCurrentPlayingId(id));
        dispatch(setCurrentTime(0));
        dispatch(updatePlayerTrackLoved(isLoved));
      }
    }
    catch (err) {
      console.error('Не удалось воспроизвести трек ', err);
    }
  }

  const playing = currentPlayingId === id && isPlaying;

  return (
<div className="rounded-3xl border border-black" onClick={handleSoundTrack}>
  <div className="px-2 py-2.5 flex items-center gap-3.5">
    <SamplesImage image={photo?.Photo || ''} name={name} />
    <div>
      {playing ? <PauseIcon /> : <PlayIcon />}
    </div>
    
    <div className="flex flex-col flex-1 min-w-0">
      <div className="text-[#1D1F22] font-medium text-xs md:text-base line-clamp-2 break-words overflow-hidden max-w-full">
        {name}
      </div>
      <p className="text-[#1D1F22]/20 font-medium text-xs md:text-base truncate mt-0.5">
        {author}
      </p>
    </div>
  </div>
</div>
  )
}
